import { NotFoundBody, NotFoundImage, Text, Button } from './NotFound.styled';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<NotFoundBody>
			<NotFoundImage src="./images/404error.svg" alt="404 Error Illustration" />
			<Text>Oops! It seems like the page you're looking for does not exist...</Text>
			<Button> <Link to="/" >Go Back</Link> </Button>
		</NotFoundBody>
	)
}

export default NotFound