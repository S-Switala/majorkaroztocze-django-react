import { useState, useRef } from 'react'

const faqs = [
	{
		question: 'Jak przygotować się na spływ kajakowy Tanwią?',
		answer:
			'Przygotowanie do spływu Tanwią nie wymaga specjalistycznego przygotowania. Wysokiej jakości sprzęt zapewniamy my - Majorka Roztocze (kajak, wiosła, kamizelki ratunkowe). Najważniejsze to ubrać się stosownie do pogody. Ubranie wybierz wygodne i przewiewne, które nie krępuje ruchów i szybko schnie. Warto również zabrać ze sobą dodatkowy zestaw ubrań na zmianę, w razie gdybyś chciał zmienić się po spływie. W słoneczne dni obowiązkowo zabieramy nakrycie głowy oraz krem z filtrem, aby uniknąć słonecznych oparzeń. Spływ wiosną lub wczesną jesienią może być bardziej wymagający i należy wziąć ze sobą kurtkę. Na spływie kajakowym warto zadbać o odpowiednie nawodnienie i pożywienie. Zabierz ze sobą butelkę wody oraz lekkie przekąski, które uzupełnią Twoją energię. Warto zabrać ze sobą również coś wodoodpornego, aby schować tam swoje cenne rzeczy- telefon, portfel, klucze. W ofercie posiadamy wodoszczelne worki.',
	},
	{
		question: 'Co jeżeli nie potrafię pływać?',
		answer:
			'Zapewniamy naszym kajakarzom certyfikowane kamizelki ratunkowe polskiego producenta, które pozwalają unosić się nad powierzchnią wody osobom nie potrafiącym pływać.',
	},
	{
		question: 'Ile trwa spływ kajakowy rzeką Tanew?',
		answer:
			'W zależności od wybranej trasy spływ trwa od 2 do 5 godzin. Po zakończonym spływie na przystani Majorka Roztocze istnieje możliwość rozpalenia ogniska/grilla i uzupełnienia kalorii spalonych podczas spływu.',
	},
	{
		question: 'Co powinieneś ze sobą zabrać?',
		answer:
			'Na kajaki ubieramy się raczej lekko i sportowo. Odradzamy zabieranie ze sobą kluczy, portfeli telefonów, bo często przy wywrotce tych rzeczy nie da się już znaleźć. Te rzeczy można zostawić w samochodach lub u naszego kierowcy, który kajaki będzie zawoził lub odbierał. Jeżeli już koniecznie chcecie państwo zabrać ze sobą klucze, telefon, dokumenty, w wypożyczalni dostępne są worki wodoszczelne. Ewentualnie można zaopatrzeć się w szczelny słoik. Warto mieć również suche ubrania do przebrania się po zakończonym spływie.',
	},
	{
		question: 'Czy mogę zabrać ze sobą dzieci?',
		answer:
			'Oczywiście, nasi najmłodsi kajakarze liczyli zaledwie dwie wiosny. Posiadamy również dla nich kamizelki w odpowiednim rozmiarze oraz specjalną dostawkę w kajaku, aby mogli wygodnie siedzieć (2+1). Dla osób płynących pierwszy raz zaleca się jednak by pierwszy spływ odbyć samemu dla nabrania wprawy w sterowaniu kajakiem.',
	},
	{
		question: 'Co zrobić ze śmieciami po np. kanapkach?',
		answer:
			'Śmieci pod żadnym pozorem nie wyrzucamy w losowych miejscach po drodze. Trasa spływu płynie wzdłuż naturalnych siedlisk dzikich zwierząt, należy więc zachować ciszę by ich nie płoszyć a przy odrobinie szczęścia będzie można zobaczyć sarnę, jelenia bądź bobra w naturalnym środowisku. Wszystkie śmieci zostawiamy w kajaku, a po spływie wkładamy do worków.',
	},
]

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null)
	const answerRefs = useRef([])

	const toggleFAQ = index => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='faq-section'>
			{faqs.map((item, index) => (
				<div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
					<button className='faq-question' onClick={() => toggleFAQ(index)}>
						{item.question}
					</button>
					<div
						className='faq-answer'
						ref={el => (answerRefs.current[index] = el)}
						style={{
							maxHeight: openIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : '0',
						}}>
						<p>{item.answer}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default FAQ
