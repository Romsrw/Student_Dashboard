import React, { useEffect } from 'react';
import './Chat.scss';
import SmallAvatar from '../../img/SmallAvatar.png';
import AddIcon from '../../img/AddIcon.png';
import DianneAvatar from '../../img/DianneAvatar.png';
import JarvisAvatar from '../../img/JarvisAvatar.png';
import MilesAvatar from '../../img/MilesAvatar.png';
import SuiAvatar from '../../img/SuiAvatar.png';
import ChatAvatar from '../../img/ChatAvatar.svg';
import { useGetChats } from './hooks/useGetChats';
import { useDispatch, useSelector } from 'react-redux';
import { setChatsAction } from '../../store/actions/chatsActions';

const Chat = () => {
  const { isLoading, fetchChats } = useGetChats();
  const dispatch = useDispatch();
  const { chats } = useSelector((state) => state.chatsState);
  console.log(chats);

  useEffect(() => {
    fetchChats().then((data) => dispatch(setChatsAction(data)));
  }, []);

  return (
    <div className='messanger'>
      <div className='messanger__header'>
        <img
          src={SmallAvatar}
          alt='SmallAvatar'
          className='messanger__avatar'
        />
        <h2 className='messanger__title'>Messages</h2>
      </div>
      <div className='messanger__body'>
        <ul className='friends'>
          <li className='friend'>
            <button>
              <img src={AddIcon} alt='AddIcon' />
            </button>
            <span className='friend__name'>Add</span>
          </li>
          <li className='friend'>
            <button>
              <img src={DianneAvatar} alt='DianneAvatar' />
            </button>
            <span className='friend__name'>Dianne</span>
          </li>
          <li className='friend'>
            <button>
              <img src={JarvisAvatar} alt='JarvisAvatar' />
            </button>
            <span className='friend__name'>Dianne</span>
          </li>
          <li className='friend'>
            <button>
              <img src={MilesAvatar} alt='MilesAvatar' />
            </button>
            <span className='friend__name'>Dianne</span>
          </li>
          <li className='friend'>
            <button>
              <img src={SuiAvatar} alt='SuiAvatar' />
            </button>
            <span className='friend__name'>Sui</span>
          </li>
        </ul>
        <div className='chat'>
          <ul className='chat__list'>
            <li className='chat__item'>
              <img src={ChatAvatar} alt='ChatAvatar' className='chat__avatar' />
              <div className='chat__info'>
                <span className='chat__autor'>Sophie Kowalski</span>
                <span className='chat__message'>
                  Thanks, Mia. Please let me know when I can...
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chat;
