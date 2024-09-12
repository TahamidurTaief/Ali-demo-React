import { useState } from 'react';
import React from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="accordion">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 pt-5">
                        <div className="accordion-content">
                            <h2>Questions Fréquemment Posées</h2>
                            <p>Explorez les questions les plus fréquemment posées par nos clients et découvrez comment nous pouvons vous accompagner dans vos projets.</p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-5">
                        {accordionData.map((item, index) => (
                            <div key={index} className="accordion-item">
                                <div
                                    className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.question}
                                </div>
                                <div
                                    className="accordion-content"
                                    style={{ maxHeight: activeIndex === index ? '200px' : '0px' }}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const accordionData = [
    {
        question: 'Quels services propose le Cabinet Média Intelligence ?',
        answer: 'Nous utilisons une combinaison de méthodes de collecte de données qualitatives et quantitatives. Cela inclut des enquêtes, des entretiens, des analyses de données en ligne et l exploration de bases de données spécialisées.',
    },
    {
        question: 'Comment se passe la collecte des données ?',
        answer: 'Nous utilisons une combinaison de méthodes de collecte de données qualitatives et quantitatives. Cela inclut des enquêtes, des entretiens, des analyses de données en ligne et l exploration de bases de données spécialisées.',
    },
    {
        question: 'En quoi consiste l\'intelligence compétitive ?',
        answer: 'Nous utilisons une combinaison de méthodes de collecte de données qualitatives et quantitatives. Cela inclut des enquêtes, des entretiens, des analyses de données en ligne et l exploration de bases de données spécialisées.',
    },
    {
        question: 'Quels sont les avantages de la recherche digitale ?',
        answer: 'Nous utilisons une combinaison de méthodes de collecte de données qualitatives et quantitatives. Cela inclut des enquêtes, des entretiens, des analyses de données en ligne et l exploration de bases de données spécialisées.',
    },
];

export default Accordion;
