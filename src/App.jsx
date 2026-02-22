import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [uRes, pRes, cRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/users'),
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/comments')
        ]);
        
        setUsers(await uRes.json());
        setPosts(await pRes.json());
        setComments(await cRes.json());
      } catch (e) {
        console.error("Ошибка загрузки:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUser = selectedUser === 'all' || post.userId === parseInt(selectedUser);
    return matchesSearch && matchesUser;
  });

  if (loading) return <div className="loader">Загрузка данных</div>;

  return (
    <div className="container">
      
      <div className="filters">
        <input 
          type="text" 
          placeholder="Поиск по заголовку..." 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="all">Все авторы</option>
          {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
      </div>

      <div className="posts-grid">
        {filteredPosts.map(post => (
          <PostCard 
            key={post.id} 
            post={post} 
            user={users.find(u => u.id === post.userId)}
            comments={comments.filter(c => c.postId === post.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;