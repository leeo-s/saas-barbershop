import { Spinner } from "./_components/ui/spinner"
import Header from "./_components/header"

const Loading = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="flex justify-center">
        <Spinner className="mt-[50%] size-8" />
      </div>
    </div>
  )
}

export default Loading
