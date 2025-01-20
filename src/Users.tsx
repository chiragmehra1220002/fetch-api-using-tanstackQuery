
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deletePost, git_users, updatePost } from './API/FetchApi';
import Modal from './Modal'; 

const Users: React.FC = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: git_users,
  });

  const [editing, setEditing] = useState(false);
  const [postIdBeingEdited, setPostIdBeingEdited] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: (data, id: string) => {
      queryClient.setQueryData(["users"], (ele: any) => {
        return ele?.filter((user: any) => user.id !== id);
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: (id: string) => updatePost(id),
    onSuccess: (apiData, postId: string) => {
      queryClient.setQueryData(["users"], (postsData: any) => {
        return postsData?.map((user: any) => {
          return user.id === postId
            ? { ...user, title: newTitle }
            : user;
        });
      });
    },
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h3>Error: {error.message || "Something went wrong!"}</h3>;

  return (
    <div>
      <h1>Fetch API Using Tanstack Query</h1>

      {data && data.length > 0 ? (
        <ul>
          {data.map((user: any) => (
            <li key={user.id}>
              <div className="card">
                <img src={user.image} alt={user.login} width={50} />
                <h5>{user.title.slice(0, 15)}</h5>
                <button
                  onClick={() => {
                    setEditing(true);
                    setPostIdBeingEdited(user.id);
                    setNewTitle(user.title);
                    setShowModal(true);
                  }} className='update'
                >
                  Update
                </button>
                <button onClick={() => deleteMutation.mutate(user.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No users available</h2>
      )}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        updateMutation={updateMutation}
        postIdBeingEdited={postIdBeingEdited}
      />
    </div>
  );
};

export default Users;
