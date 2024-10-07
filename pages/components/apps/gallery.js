import { Gallerylist } from '@/shared/data/apps/gallerydata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const gallery = () => {
  return (
    <Fragment>
      <Seo title={"Gallery"} />
      <Pageheader title="Gallery" heading="Apps" active="Gallery" />
        <Gallerylist />
    </Fragment>
  )
}

gallery.layout = "Contentlayout"

export default gallery;