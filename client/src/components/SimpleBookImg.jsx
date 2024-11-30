import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Axios from "axios";

function SimpleBookImg({ selectedBook }) {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (selectedBook) {
            const imageUrl = `http://localhost:3001/api/static/${selectedBook['cover-file-name']}`;

            Axios.get(imageUrl, { responseType: "blob" })
                .then((response) => {
                    const url = URL.createObjectURL(response.data);
                    setImageSrc(url);
                })
                .catch(() => {
                    const fallbackUrl = `http://localhost:3001/api/static/blank.jpg`;
                    setImageSrc(fallbackUrl);
                });
        } else {
            setImageSrc(null);
        }
    }, [selectedBook]);

    return (
        <div>
            {imageSrc ? (
                <Image src={imageSrc} alt={selectedBook?.title || "Book Cover"} rounded fluid />
            ) : (
                <p>Select a book to see its cover</p>
            )}
        </div>
    );
}

export default SimpleBookImg;