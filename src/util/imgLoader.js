import beecomb from '../assets/beecomb/beecomb.png';
import tron from '../assets/tron/tron.png';
import siblants from '../assets/siblants/siblants.png';
import grumpygoats from '../assets/grumpygoats/grumpygoats.png';
import tactile from '../assets/tactile/tactile.png';



const images = [
    { id: 0, src: beecomb, title: 'BeeComb', description: 'bar' },
    { id: 1, src: tron, title: 'Tron', description: 'bar' },
    { id: 2, src: siblants, title: 'SiblAnts', description: 'bar' },
    { id: 3, src: grumpygoats, title: 'GrumpyGoats', description: 'bar' },
    { id: 4, src: tactile, title: 'Tactile', description: 'bar' },
];

function imageLoader() {
    return images;
}

export default imageLoader;