import data from '../../data/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import MainProducts from '../components/Products/MainProducts';
import { useEffect, useState } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const Product = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div>
            {
                loading ?
                    <div className="loader">
                        <PropagateLoader
                            color={"blue"}
                            loading={loading}
                            size={20}
                        />
                    </div>
                    :


                    <MainProducts />
            }
        </div>
    );
};

export default Product;