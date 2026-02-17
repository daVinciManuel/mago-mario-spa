interface cornerSize {
  size: 'small' | 'big';
}
export const CornersDecoration = ({ size }: cornerSize) =>
(
  size === 'big' ? (
    <>
      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-amber-700"></div>
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-amber-700"></div>
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-amber-700"></div>
      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-amber-700"></div>
    </>
  ) : (<>
    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-700/70"></div >
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-700/70"></div>
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-700/70"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-700/70"></div>
  </>
  )
)

