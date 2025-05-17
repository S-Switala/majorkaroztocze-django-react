import { useState, useEffect } from "react";
import axios from '../axios';

const CabinPrice = ({ cabinId }) => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (cabinId) {
            axios.get(`cabin_price/${cabinId}/`)
                .then(response => {
                    setPrice(response.data.price_per_night);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Błąd pobierania ceny domku:", error);
                    setLoading(false);
                });
        }
    }, [cabinId]);

    if (loading) return <span>Ładowanie...</span>;
    if (price === null) return <span>Błąd</span>;

    return <span>{price} zł</span>;
};

export default CabinPrice;
