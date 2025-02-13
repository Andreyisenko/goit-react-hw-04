import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
ReactModal.setAppElement('#root');
const ImageModal = () => {
    return (
    <div className={css.modal}>
      <ReactModal isOpen={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(82, 79, 79, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: '1px solid #ccc',
          background: 'rgba(24, 23, 23, 0.75)',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}

      >
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDc1NTZ8MHwxfHNlYXJjaHwxNnx8Y2FyfGVufDB8fHx8MTczOTQyODA2MHww&ixlib=rb-4.0.3&q=80&w=1080
"
          alt="Chen Mizrach
"
        />
      </ReactModal>
    </div>
  );
};

export default ImageModal;
