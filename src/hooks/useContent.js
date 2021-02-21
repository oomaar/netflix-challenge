import { useEffect, useState } from "react";
import db from "../lib/firebase";

export default function useContent (target) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        db
        .collection(target)
        .get()
        .then(snapshot => {
            const allContent = snapshot.docs.map(object => ({
                ...object.data(),
                docId: object.id,
            }));

            setContent(allContent);
        })
        .catch(err => console.log(err.message));

    }, []);

    return { [target]: content };
}