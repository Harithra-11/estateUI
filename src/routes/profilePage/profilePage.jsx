import Chat from '../../components/chat/Chat';
import List from '../../components/list/List';
import './profilePage.scss';
function ProfilePage() {
  return (
    <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update profile</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" alt="" /></span>
                    <span>Username:<b>John Doe</b></span>
                    <span>Email:<b>John@gmail.com</b></span>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Create New post</button>
                </div>
                <List/>
                <div className="title">
                    <h1>Saved List</h1>
                    
                </div>
                <List/>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  );
}
export default ProfilePage;