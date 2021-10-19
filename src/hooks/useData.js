import { useEffect, useState } from "react";

const useData = () => {
    const [cardiology, setCardiology] = useState([]);
    const [laboratory, setLaboratory] = useState([]);
    const [gastroenterology, setGastroenterology] = useState([]);

    const [pediatrics, setPediatrics] = useState([]);
    const [surgery, setSurgery] = useState([]);
    const [therapist, setTherapist] = useState([]);


    useEffect(() => {
        fetch('./cardiology.json')
            .then(res => res.json())
            .then(data => setCardiology(data))
    }, []);

    useEffect(() => {
        fetch('./laboratory.json')
            .then(res => res.json())
            .then(data => setLaboratory(data))
    }, []);

    useEffect(() => {
        fetch('./gastroenterology.json')
            .then(res => res.json())
            .then(data => setGastroenterology(data))
    }, []);
    useEffect(() => {
        fetch('./pediatrics.json')
            .then(res => res.json())
            .then(data => setPediatrics(data))
    }, []);
    useEffect(() => {
        fetch('./surgery.json')
            .then(res => res.json())
            .then(data => setSurgery(data))
    }, []);
    useEffect(() => {
        fetch('./therapist.json')
            .then(res => res.json())
            .then(data => setTherapist(data))
    }, []);
    return [cardiology, laboratory, gastroenterology,pediatrics,surgery,therapist];
};

export default useData;