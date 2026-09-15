const assets = [
  {
    id: 1,
    name: 'Color Study',
    type: 'Palette',
    symbol: '◐',
    tone: 'coral',
  },
  {
    id: 2,
    name: 'Shape System',
    type: 'Geometry',
    symbol: '◆',
    tone: 'blue',
  },
  {
    id: 3,
    name: 'Motion Notes',
    type: 'Animation',
    symbol: '✳',
    tone: 'yellow',
  },
]

function AssetCard({ asset }) {
  return (
    <article className={`asset-card ${asset.tone}`}>
      <div className="asset-symbol" aria-hidden="true">{asset.symbol}</div>
      <div>
        <p className="asset-type">{asset.type}</p>
        <h3>{asset.name}</h3>
      </div>
      <span className="asset-id">0{asset.id}</span>
    </article>
  )
}

function AssetGallery() {
  return (
    <section className="assets-section" id="assets">
      <div className="section-heading">
        <p className="eyebrow">03 / Design assets</p>
        <h2>Asset library</h2>
        <p className="section-note">{assets.length} assets</p>
      </div>
      <div className="asset-grid">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </section>
  )
}

export default AssetGallery
