import { useState, useEffect } from "react";

export default function TagsPage(){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [images, setImages] = useState<any[]>([])
  const [tags, setTags] = useState<any>([]);

  return (
    <div>
      TagsPage
    </div>
  )
}