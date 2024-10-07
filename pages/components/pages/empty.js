
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'

const Empty = () => {
  return (
    <div>
      <Seo title="Empty" />
			<Pageheader title="Empty" heading="Pages" active="Empty" />
    </div>
  )
}
Empty.layout = "Contentlayout"

export default Empty;