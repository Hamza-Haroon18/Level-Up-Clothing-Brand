import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function Deleteproductkid() {
  const { id } = useParams();
  const hasRun = useRef(false); 

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const handleDelete = async () => {
      const confirmDelete = window.confirm("Are you sure you want to delete this product?");
      if (!confirmDelete) {
        window.location.href = '/admin/kid';
        return;
      }

      try {
        const res = await fetch(`http://localhost:3000/admin/kiddelete-product/${id}`, {
          method: 'GET',
        });

        if (res.ok) {
          alert('Product Deleted Successfully');
        } else {
          alert('Failed to delete product');
        }
      } catch (err) {
        console.error(err);
        alert('Server error');
      } finally {
        window.location.href = '/admin/kid';
      }
    };

    handleDelete();
  }, [id]);

  return null;
}

export default Deleteproductkid;
