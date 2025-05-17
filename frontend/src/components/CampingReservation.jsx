import { useState, useEffect } from "react";
import axios from '../axios';

const CampingReservation = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [pricePerAdult, setPricePerAdult] = useState(null);
    const [pricePerChild, setPricePerChild] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Pobieranie cen pola namiotowego z Django API
    useEffect(() => {
        axios.get("camping_prices/")
            .then(response => {
                setPricePerAdult(response.data.price_per_adult);
                setPricePerChild(response.data.price_per_child);
            })
            .catch(error => console.error("Błąd pobierania cen:", error));
    }, []);

    // Obliczanie ceny rezerwacji
    useEffect(() => {
        if (startDate && endDate && pricePerAdult !== null && pricePerChild !== null) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const nights = Math.max((end - start) / (1000 * 60 * 60 * 24), 0);
            const calculatedPrice = (adults * pricePerAdult + children * pricePerChild) * nights;
            setTotalPrice(calculatedPrice);
        }
    }, [startDate, endDate, adults, children, pricePerAdult, pricePerChild]);

    const handleReservationSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const reservationData = {
            user_name: userName,
            phone_number: phoneNumber,
            email: email,
            start_date: startDate,
            end_date: endDate,
            adults,
            children
        };

        axios.post("create_camping_reservation/", reservationData)
            .then(() => {
                alert("Rezerwacja zapisana! zajrzyj do skrzynki pocztowej!");
                setStartDate("");
                setEndDate("");
                setUserName("");
                setPhoneNumber("");
                setEmail("");
                setAdults(1);
                setChildren(0);
                setTotalPrice(0);
            })
            .catch(error => {
                alert("Błąd rezerwacji: " + JSON.stringify(error.response?.data));
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <form className="reservation-form" onSubmit={handleReservationSubmit}>
            <h2 className="h2">Rezerwacja Pola Namiotowego</h2>

            <label className="form-label">Data rozpoczęcia:</label>
            <input 
                type="date" 
                className="form-input" 
                value={startDate} 
                onChange={e => setStartDate(e.target.value)} 
                required 
            />

            <label className="form-label">Data zakończenia:</label>
            <input 
                type="date" 
                className="form-input" 
                value={endDate} 
                onChange={e => setEndDate(e.target.value)} 
                required 
            />

            <label className="form-label">Imię i nazwisko:</label>
            <input 
                type="text" 
                className="form-input" 
                value={userName} 
                onChange={e => setUserName(e.target.value)} 
                required 
            />

            <label className="form-label">Numer telefonu:</label>
            <input 
                type="tel" 
                className="form-input" 
                value={phoneNumber} 
                onChange={e => setPhoneNumber(e.target.value)} 
                required 
            />

            <label className="form-label">Adres e-mail:</label>
            <input 
                type="email" 
                className="form-input" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
            />

            <label className="form-label">Ilość dorosłych ({pricePerAdult ?? "Ładowanie..."} PLN/osoba):</label>
            <input 
                type="number" 
                className="form-input" 
                value={adults} 
                min="1" 
                onChange={e => setAdults(parseInt(e.target.value) || 1)} 
                required 
            />

            <label className="form-label">Ilość dzieci ({pricePerChild ?? "Ładowanie..."} PLN/osoba):</label>
            <input 
                type="number" 
                className="form-input" 
                value={children} 
                min="0" 
                onChange={e => setChildren(parseInt(e.target.value) || 0)} 
            />

            <h3 className="total-price">Łączna cena: {totalPrice} PLN</h3>

            <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
            >
                {isSubmitting ? "Rezerwuję..." : "Zarezerwuj"}
            </button>
        </form>
    );
};

export default CampingReservation;
