import noMatch from '../../img/noMatch.png'

const NoMatch: React.FC = () => {
    return (
        <div className="noMatch">
            <span className="noMatch__text">Don't worry, someday we will definitely find it...</span>
            <img src={noMatch} alt="logo" className="noMatch__img" />
        </div>
    );
}

export default NoMatch;