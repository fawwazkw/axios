import { useState, useEffect } from 'react';
import { useAsync } from 'react-use';

const usePosts = () => {
const [posts, setPosts] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);

const { value: response, error: responseError, loading: responseLoading } = useAsync(async () => {
setIsLoading(true);
const result = await fetch('http://localhost:3004/postgenerated'); // ganti dengan URL mockoon Anda
const data = await result.json();
setIsLoading(false);
setPosts(data);
return data;
}, []);

useEffect(() => {
if (responseError) {
setError(responseError);
}
}, [responseError]);

return { posts, error, isLoading };
};

export default usePosts;