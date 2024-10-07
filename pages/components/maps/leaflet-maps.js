
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
const Leafletmapsdata = dynamic(() => import("@/shared/data/maps/leafletdata"), { ssr: false, });
import React from 'react';

const LeafletMaps = () => {
  return (
    <div >
      <Seo title={"Leaflet-Maps"} />
      <Pageheader title="Leaflet Maps" heading="Maps" active="Leaflet Maps" />
      <Leafletmapsdata />
    </div>
  );
};

LeafletMaps.layout = "Contentlayout";

export default LeafletMaps;
