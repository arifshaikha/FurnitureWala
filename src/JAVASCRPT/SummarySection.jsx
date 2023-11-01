import '../CSS/SummarySection.css';

const SummarySection = (props) => {
    
    
    
    return (
        <div className="mainSummaryContainer">
            <div className="summaryContainer container flex" id={props.ord}>
                <div className="leftSummaryContainer">
                    <img src="../Assests/12.jpg" alt="" />
                </div>
                <div className="rightSummaryContainer">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente adipisci vero eaque ex aspernatur earum ipsum quidem obcaecati? Hic numquam voluptates veritatis ea quaerat harum alias assumenda non dolores recusandae?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente adipisci vero eaque ex aspernatur earum ipsum quidem obcaecati? Hic numquam voluptates veritatis ea quaerat harum alias assumenda non dolores recusandae?
                    </p>
                </div>
            </div>
        </div>
    );
}


export default SummarySection;