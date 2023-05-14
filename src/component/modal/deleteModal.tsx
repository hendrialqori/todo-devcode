import { AlertIcon } from '@/assets/icon/alertIcon';
import { Wrapper } from './wrapper';

interface Props {
  isOpen: boolean;
  title: string;
  text: string;
  isLoading: boolean;
  deleteHandler: () => void;
  deleteCencel: () => void;
}

export const ModalDelete: React.FC<Props> = ({
  isOpen,
  title,
  text,
  isLoading,
  deleteHandler,
  deleteCencel,
}) => {
  const cencelModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    deleteCencel();
  };

  const deleteItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    deleteHandler();
  };

  return (
    <Wrapper isShow={isOpen} clickOutside={deleteCencel}>
      <div
        className='rounded-md relative w-6/12 lg:w-4/12 h-max bg-white py-4 mt-28'
        data-cy='modal-delete'
        onClick={(e) => e.stopPropagation()}
      >
        <div data-cy='modal-delete-icon' className='w-max mx-auto py-4'>
          <AlertIcon />
        </div>
        <div
          data-cy='modal-delete-title'
          className='text-center font-semibold py-4'
        >
          <p>{text}</p>
          <h3>&quot;{title}&quot;?</h3>
        </div>
        <div className='px-5 flex items-center justify-center gap-4 py-4'>
          <button
            onClick={cencelModal}
            className='py-2 px-7 rounded-full bg-gray-200 font-semibold'
            data-cy='modal-delete-cancel-button'
          >
            Batal
          </button>
          <button
            onClick={deleteItem}
            disabled={isLoading}
            className={`py-2 px-7 rounded-full text-white  font-semibold ${
              isLoading ? 'bg-rose-500/50' : 'bg-rose-500'
            }`}
            data-cy='modal-delete-confirm-button'
          >
            {isLoading ? 'loading' : 'Hapus'}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
