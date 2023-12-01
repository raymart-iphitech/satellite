import { TopValuesState } from "../top"
import { topImagesData } from "./data"


type ImagesProps = { topValues: TopValuesState }

const Images = ({ topValues }: ImagesProps) =>{

  const renderImages = () =>{
    const mappedImages = topImagesData.map(data => (
      <div
        key={ data.tag } 
        className="flex flex-col text-center">
        <div className="mb-4">
          <p className="text-sm mb-1">{ data.title }</p>
          <a 
            href={`https://suzaku.eorc.jaxa.jp/JASMIN/data/img/${ topValues.area }/${ data.tag }/${ topValues.year }/img-${ data.tag }-${ topValues.year }${ topValues.month }${ topValues.day }-${ topValues.area }.png`}
            target="_blank">
            <img
              className="max-w-[160px] h-[152px]"
              src={`https://suzaku.eorc.jaxa.jp/JASMIN/data/img/${ topValues.area }/${ data.tag }/${ topValues.year }/img-${ data.tag }-${ topValues.year }${ topValues.month }${ topValues.day }-${ topValues.area }-s.png`} 
              alt="" />
          </a>
        </div>
        <div>
          <p className="flex flex-col text-sm mb-1">
            { data.title }
            <span className="leading-[1]">anomaly</span>
          </p>
          <a 
            href={`https://suzaku.eorc.jaxa.jp/JASMIN/data/img/${ topValues.area }/${ data.tag }/${ topValues.year }/img-${ data.tag }_c-${ topValues.year }${ topValues.month }${ topValues.day }-${ topValues.area }.png`}
            target="_blank">
            <img
              className="max-w-[160px] h-[152px]"
              src={`https://suzaku.eorc.jaxa.jp/JASMIN/data/img/${ topValues.area }/${ data.tag }/${ topValues.year }/img-${ data.tag }_c-${ topValues.year }${ topValues.month }${ topValues.day }-${ topValues.area }-s.png`} 
              alt="" />
          </a>
        </div>
      </div>
    ))

    return mappedImages
  }

  return (
    <div className="flex max-w-[1200] justify-evenly mx-auto">
      { renderImages() }
    </div>
  )
}


export default Images