import './styles.css';

interface CaseStudyBodyProps {
  title: string;
  subtitle: string;
  bodyCopy: string;
  optionalBodyImage?: string;
  imageSource: string;
  secondImageSource?: string;
}

const CaseStudyBody: React.FC<CaseStudyBodyProps> = ({
  title,
  subtitle,
  bodyCopy,
  optionalBodyImage,
  imageSource,
  secondImageSource,
}) => {
  const classNames = optionalBodyImage ? 'hasBodyImage' : '';
  return (
    <div className='caseStudyBodyContainer'>
      <div className='caseStudyTextPair caseStudyHeader'>
        <h1 className='fs-80'>{title}</h1>
        <p className='fw-500'>{subtitle}</p>
      </div>
      <div className='caseStudyTextPair'>
        <h2>THE BRIEF</h2>
        <div className={classNames}>
          <p className='fs-16'>{bodyCopy}</p>
          {optionalBodyImage ? (
            <img
              className='caseStudyBodyImage'
              src={optionalBodyImage}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <img src={imageSource} />
      {secondImageSource ? <img src={secondImageSource} /> : ''}
    </div>
  );
};

export default CaseStudyBody;
