import '../node_modules/bootstrap/less/bootstrap.less';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap';
import imgLogo from './images/wweLogo.png';
import imgSummerSlam from './images/summerSlam.png';
import imgDownArrow from './images/downArrow.png';

function component() {
    var element = document.createElement('div');
    var imageLogo = document.getElementById("wweLogo");
    var imageSummerSlam = document.getElementById("wweSummerSlam");
    var imageDownArrow = document.getElementById("wweDownArrow");
    imageLogo.src = imgLogo;
    imageSummerSlam.src = imgSummerSlam;
    imageDownArrow.src = imgDownArrow;
}
component();