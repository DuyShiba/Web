import React from 'react';
import { Music } from 'lucide-react';

interface SpotifyTrack {
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string }[];
  };
  duration_ms: number;
  external_urls: {
    spotify: string;
  };
}

interface SpotifyPlayerState {
  is_playing: boolean;
  progress_ms: number;
  item: SpotifyTrack;
}

export const SpotifyCard: React.FC = () => {
  const [playerState, setPlayerState] = React.useState<SpotifyPlayerState | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const formatTime = (ms: number) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const fetchCurrentTrack = async (token: string) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 204) {
        setPlayerState(null);
        setError('Not playing');
        return;
      }

      if (response.status === 401) {
        localStorage.removeItem('spotify_token');
        setPlayerState(null);
        setError('Token expired');
        return;
      }

      const data = await response.json();
      if (data && data.item) {
        setPlayerState(data);
        setError(null);
      } else {
        setPlayerState(null);
        setError('No track data');
      }
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      setError('Failed to fetch');
      setPlayerState(null);
    }
  };

  const handleConnect = () => {
    if (typeof window !== 'undefined') {
      const clientId = '8be7405f52b74339976797153edd6878';
      const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const redirectUri = isDevelopment 
        ? `http://127.0.0.1:${window.location.port}/callback`
        : 'https://duyshiba.github.io/callback';
      const scope = 'user-read-currently-playing user-read-playback-state';
      
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
    }
  };

  React.useEffect(() => {
    // Check for stored token on component mount
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('spotify_token');
      if (token) {
        fetchCurrentTrack(token);
        const interval = setInterval(() => fetchCurrentTrack(token), 1000);
        return () => clearInterval(interval);
      }
    }
  }, []);

  React.useEffect(() => {
    // Check for Spotify token in URL hash
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const token = hash.split('&')[0].split('=')[1];
        if (token) {
          localStorage.setItem('spotify_token', token);
          fetchCurrentTrack(token);
          // Remove hash from URL without causing a page reload
          history.replaceState(null, '', window.location.pathname);
        }
      }
    }
  }, []);

  if (!playerState) {
    return (
      <div className="bg-[#1e2124] rounded-xl p-6 border border-gray-700 hover:border-[#1DB954] transition-all duration-300">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Music className="w-5 h-5 mr-2 text-[#1DB954]" />
          Currently Playing
        </h3>
        <div 
          className="flex items-center space-x-3 bg-[#282b30] p-4 rounded-lg cursor-pointer hover:bg-[#32363b] transition-all duration-300"
          onClick={handleConnect}
        >
          <div className="w-12 h-12 rounded-lg bg-[#1DB954] flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-white font-medium">Connect Spotify</div>
            <div className="text-gray-400 text-sm">{error || 'Click to connect your account'}</div>
          </div>
        </div>
      </div>
    );
  }

  const progressPercent = (playerState.progress_ms / playerState.item.duration_ms) * 100;

  return (
    <div className="bg-[#1e2124] rounded-xl p-6 border border-gray-700 hover:border-[#1DB954] transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Music className="w-5 h-5 mr-2 text-[#1DB954]" />
        Currently Playing
      </h3>
      <a 
        href={playerState.item.external_urls.spotify} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-center space-x-3 bg-[#282b30] p-4 rounded-lg hover:bg-[#32363b] transition-all duration-300">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img 
              src={playerState.item.album.images[0].url}
              alt={playerState.item.album.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium truncate">
              {playerState.item.name}
            </div>
            <div className="text-gray-400 text-sm truncate">
              {playerState.item.artists.map(a => a.name).join(', ')}
            </div>
            <div className="mt-2 space-y-1">
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div 
                  className="bg-[#1DB954] h-1 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{formatTime(playerState.progress_ms)}</span>
                <span>{formatTime(playerState.item.duration_ms)}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};