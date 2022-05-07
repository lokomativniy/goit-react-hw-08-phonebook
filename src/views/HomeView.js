import phonebook from '../icons/phonebook.png';

const HomeView = () => {
  return (
    <div
      style={{
        display: 'block',
        textAlign: 'center',
        marginTop: '20px',
        fontStyle: 'italic',
        color: 'grey',
      }}
    >
      <h1>My phonebook</h1>
      <img
        src={phonebook}
        alt=""
        width="300"
        style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}
      />
    </div>
  );
};

export default HomeView;
