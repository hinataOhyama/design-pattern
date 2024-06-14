import useDogImages from "../hooks/useDogImage";

const DogImage = () => {
  const dogs = useDogImages();
  return (
    <div style={{ height: '200px', overflow: 'hidden' }}>
      {dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}
    </div>
  )
}

export default DogImage
