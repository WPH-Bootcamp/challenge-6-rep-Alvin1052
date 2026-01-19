import type { TCast } from '@/details/types';

type CastcrewsProps = Pick<TCast, 'profile_path' | 'name' | 'character'>;

const CastcrewCard = ({ name, character, profile_path }: CastcrewsProps) => {
  return (
    <div className='flex items-center gap-3 bg-neutral-900/20 hover:bg-neutral-900/40 rounded-lg p-2 cursor-pointer'>
      <img
        className='w-17.25 h-26 rounded-lg object-cover'
        src={profile_path}
        alt={name}
      />
      <div className=''>
        <div className='text-sm text-neutral-50'>{name}</div>
        <div className='text-sm text-neutral-400'>{character}</div>
      </div>
    </div>
  );
};

export default CastcrewCard;
