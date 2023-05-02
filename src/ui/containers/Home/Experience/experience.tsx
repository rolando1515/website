import { Style } from './styles';

export function Experience() {
  return (
    <Style.Container>
      <div>
        <h2>Experience</h2>
      </div>

      <div>
        <h3>Test-Engineer</h3>
        <ul>
          <p className="employer">Employer Name</p>
          <li>Execute test cases manual cases and analyze results.</li>
          <li>Create logs to document testing phases and defects.</li>
          <li>
            Work with cross-functional teams to ensure quality throughout the
            software development lifecycle.
          </li>
          <li>Carry out functional and regression testing.</li>
        </ul>
      </div>
      <div>
        {' '}
        <h4>Jan 2023-Present</h4>{' '}
      </div>

    </Style.Container>









  );
}
//There has to be a cleaner way to do this but I'm not sure how.
// Why is the h4 conflicting?

export function Experience1() {
    return (
      <Style.Container>
        <div>
          <h2></h2>
        </div>
  
        <div>
          <h3>Backend engineer intern </h3>
          <ul>
            <p className="employer">Employer Name</p>
            <li>Example 1</li>
            <li>example2</li>
            <li>
              Work with cross-functional teams to ensure quality throughout the
              software development lifecycle.
            </li>
            <li>Carry out functional and regression testing.</li>
          </ul>
        </div>
        <div>
          {' '}
          <h4>Jan 2023-Present</h4>{' '}
        </div>
      </Style.Container>
    );
  }
