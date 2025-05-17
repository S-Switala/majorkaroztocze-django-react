import { useState, useEffect } from "react";
import axios from '../axios';

const CabinReservation = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [cabinId, setCabinId] = useState(""); // Wybór domku
    const [pricePerNight, setPricePerNight] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true);
    const [cabins, setCabins] = useState([]); // Lista dostępnych domków

    // Pobieranie listy domków i cen
    useEffect(() => {
        axios.get("cabins/")
            .then(response => {
                setCabins(response.data);
            })
            .catch(error => console.error("Błąd pobierania domków:", error));
    }, []);

    // Pobieranie ceny za dobę po wybraniu domku
    useEffect(() => {
        if (cabinId) {
            const selectedCabin = cabins.find(cabin => cabin.id === parseInt(cabinId));
            if (selectedCabin) {
                setPricePerNight(selectedCabin.price_per_night);
            }
        }
    }, [cabinId, cabins]);

    // Obliczanie ceny rezerwacji
    useEffect(() => {
        if (startDate && endDate && pricePerNight) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const nights = Math.max((end - start) / (1000 * 60 * 60 * 24), 0);
            setTotalPrice(nights * pricePerNight);
        }
    }, [startDate, endDate, pricePerNight]);

    // Sprawdzenie dostępności domku
    useEffect(() => {
        if (startDate && endDate && cabinId) {
            axios
                .get(`check_cabin_availability/?start_date=${startDate}&end_date=${endDate}&cabin_id=${cabinId}`)
                .then(response => {
                    setIsAvailable(response.data.is_available);
                })
                .catch(error => console.error("Błąd sprawdzania dostępności:", error));
        }
    }, [startDate, endDate, cabinId]);

    // Obsługa rezerwacji
    const handleReservationSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!isAvailable) {
            alert("Wybrany termin jest już zajęty!");
            setIsSubmitting(false);
            return;
        }

        const reservationData = {
            user_name: userName,
            phone_number: phoneNumber,
            email: email,
            start_date: startDate,
            end_date: endDate,
            cabin: cabinId // total_price usunięte, Django samo liczy cenę
        };


        axios.post("create_cabin_reservation/", reservationData)
            .then(() => {
                alert("Rezerwacja zapisana! zajrzyj do skrzynki pocztowej!");
                setStartDate("");
                setEndDate("");
                setUserName("");
                setPhoneNumber("");
                setEmail("");
                setCabinId("");
                setTotalPrice(0);
            })
            .catch(error => {
                alert("Błąd rezerwacji: " + JSON.stringify(error.response?.data));
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <form className="reservation-form" onSubmit={handleReservationSubmit}>
            <h2 className="h2">Rezerwacja Domku</h2>

            <label className="form-label">Wybierz domek:</label>
            {cabins.length > 0 ? (
                <select className="form-select" value={cabinId} onChange={e => setCabinId(e.target.value)} required>
                    <option value="">Wybierz domek</option>
                    {cabins.map(cabin => (
                        <option key={cabin.id} value={cabin.id}>
                            {cabin.name} - {cabin.price_per_night} PLN/noc
                        </option>
                    ))}
                </select>
            ) : (
                <p className="error-text">Brak dostępnych domków.</p>
            )}

            <label className="form-label">Data rozpoczęcia:</label>
            <input type="date" className="form-input" value={startDate} onChange={e => setStartDate(e.target.value)} required />

            <label className="form-label">Data zakończenia:</label>
            <input type="date" className="form-input" value={endDate} onChange={e => setEndDate(e.target.value)} required />

            <label className="form-label">Imię i nazwisko:</label>
            <input type="text" className="form-input" value={userName} onChange={e => setUserName(e.target.value)} required />

            <label className="form-label">Numer telefonu:</label>
            <input type="tel" className="form-input" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />

            <label className="form-label">Adres e-mail:</label>
            <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} required />

            <h3 className="total-price">Łączna cena: {totalPrice} PLN</h3>

            {!isAvailable && <p className="error-text">Domek jest już zarezerwowany w tym terminie.</p>}

            <button type="submit" className="submit-btn" disabled={isSubmitting || !isAvailable}>
                {isSubmitting ? "Rezerwuję..." : "Zarezerwuj"}
            </button>
        </form>
    );
};

export default CabinReservation;
