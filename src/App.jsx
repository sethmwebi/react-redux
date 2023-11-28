import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditFormPost from "./features/posts/EditFormPost";
import UserPage from "./features/users/UserPage";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postid" element={<SinglePostPage />} />
          <Route path="edit/:postid" element={<EditFormPost />} />
        </Route>
        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
