import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect(); 
  const { data: ensName } = useEnsName({ address }); 
  const { data: ensAvatar } = useEnsAvatar({ name: ensName || undefined }); 

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded shadow">
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} className="h-8 w-8 rounded-full" />}
      <div>
        {address && (
          <span className="text-gray-800">
            {ensName ? `${ensName} (${address})` : address}
          </span>
        )}
      </div>
      <button
        onClick={() => disconnect()}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
      >
        Disconnect
      </button>
    </div>
  );
}
