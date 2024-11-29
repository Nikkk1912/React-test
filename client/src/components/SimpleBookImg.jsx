import { Image } from "react-bootstrap";

function SimpleBookImg({selectedBook, selectBook}) {
    return (
        <div>
            <Image src="https://example.com/image.jpg" alt="Image description" rounded />
        </div>
    )
}

export default SimpleBookImg;