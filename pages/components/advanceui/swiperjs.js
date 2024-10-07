import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

// import required modules
import {
    Autoplay, Pagination, Navigation, Scrollbar, Mousewheel, Keyboard,
    EffectCube, EffectFade, EffectFlip, EffectCoverflow, Thumbs, FreeMode
} from "swiper/modules";
import Pageheader from "@/shared/layout-components/pageheader/pageheader";
import Image from "next/image";

const Swiperjs = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return "<span class=\"" + className + "\">" + (index + 1) + "</span>";
        },
    };

    return (
        <Fragment>
            <Seo title={"Swiper Js"} />
			<Pageheader title="Swiper Js" heading="Advanced Ui" active="Swiper Js" />
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Basic Swiper
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[Autoplay]} className="mySwiper swiper swiper-basic">
                                <SwiperSlide><Image src="../../../assets/images/media/media-27.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-26.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-25.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Swiper with Pagination
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper swiper-navigation">
                                <SwiperSlide><Image src="../../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-29.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Swiper With Navigation
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }}
                                modules={[Pagination, Autoplay]} className="mySwiper">
                                <SwiperSlide><Image src="../../../assets/images/media/media-33.jpg" alt="" className="h-100 w-100" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-31.jpg" alt="" className="h-100 w-100" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-33.jpg" alt="" className="h-100 w-100" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
             
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Dynamic Pagination
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                                <SwiperSlide><Image src="../../../assets/images/media/media-15.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-17.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-16.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Pagination With Progress
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper pagination={{ type: "progressbar", }} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                                <SwiperSlide><Image src="../../../assets/images/media/media-12.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-8.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-5.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Pagination Fraction
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper pagination={{ type: "fraction", }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[Pagination, Navigation, Autoplay]} className="mySwiper swiper pagination-fraction ">
                                <SwiperSlide><Image src="../../../assets/images/media/media-16.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-31.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Custom Paginatioin
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper pagination={pagination} modules={[Pagination, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper swiper custom-pagination">
                                <SwiperSlide><Image src="../../../assets/images/media/media-25.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-5.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-33.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Scrollbar Swiper
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper scrollbar={{ hide: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Scrollbar, Autoplay]} className="mySwiper swiper scrollbar-swiper">
                                <SwiperSlide><Image src="../../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-29.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Vertical Swiper
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper direction={"vertical"} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Pagination, Autoplay]} className="mySwiper swiper vertical swiper-vertical">
                                <SwiperSlide><Image src="../../../assets/images/media/media-8.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-32.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-17.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Mouse Wheel Control
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper direction={"vertical"} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[Mousewheel, Pagination, Autoplay]} className="mySwiper swiper vertical vertical-mouse-control">
                                <SwiperSlide><Image src="../../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-32.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Keyboard Control
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper slidesPerView={1} spaceBetween={30} keyboard={{ enabled: true, }} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                navigation={true} modules={[Keyboard, Pagination, Navigation, Autoplay]} className="mySwiper">
                                <SwiperSlide><Image src="../../../assets/images/media/media-31.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-12.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-8.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">Nested Swiper</div>
                        </div>
                        <div className="card-body">
                            <Swiper className="mySwiper swiper-h swiper swiper-horizontal1" spaceBetween={50} pagination={{ clickable: true, }} modules={[Pagination]}>
                                <SwiperSlide><Image src="../../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide>
                                    <Swiper className="mySwiper2 swiper-v swiper vertical swiper-vertical1" direction={"vertical"} spaceBetween={50} pagination={{ clickable: true, }}
                                        modules={[Pagination]}>
                                        <SwiperSlide><Image src="../../../assets/images/media/media-25.jpg" alt="" /></SwiperSlide>
                                        <SwiperSlide><Image src="../../../assets/images/media/media-31.jpg" alt="" /></SwiperSlide>
                                        <SwiperSlide><Image src="../../../assets/images/media/media-32.jpg" alt="" /></SwiperSlide>
                                    </Swiper>
                                </SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-29.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Effect Cube
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper effect={"cube"} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                pagination={true} modules={[EffectCube, Pagination, Autoplay]} className="mySwiper swiper swiper-effect-cube">
                                <SwiperSlide><Image src="../../../assets/images/media/media-62.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-63.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-64.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Effect Fade
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper spaceBetween={30} effect={"fade"} navigation={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[EffectFade, Navigation, Pagination, Autoplay]} className="mySwiper swiper swiper-fade">
                                <SwiperSlide><Image src="../../../assets/images/media/media-18.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-19.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-13.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Effect Flip
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper effect={"flip"} grabCursor={true} pagination={true} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[EffectFlip, Pagination, Navigation, Autoplay]} className="mySwiper">
                                <SwiperSlide><Image src="../../../assets/images/media/media-64.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-62.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image src="../../../assets/images/media/media-63.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Effect Coverflow
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={false}
                                slidesPerView={4}
                                autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide><Image className="Image-fluid" src="../../../assets/images/media/media-40.jpg" alt="Image" /></SwiperSlide>
                                <SwiperSlide><Image className="Image-fluid" src="../../../assets/images/media/media-41.jpg" alt="Image" /></SwiperSlide>
                                <SwiperSlide><Image className="Image-fluid" src="../../../assets/images/media/media-42.jpg" alt="Image" /></SwiperSlide>
                                <SwiperSlide><Image className="Image-fluid" src="../../../assets/images/media/media-43.jpg" alt="Image" /></SwiperSlide>
                                <SwiperSlide><Image className="Image-fluid" src="../../../assets/images/media/media-44.jpg" alt="Image" /></SwiperSlide>
                                <SwiperSlide><Image className="Image-fluid" src="../../../assets/images/media/media-59.jpg" alt="Image" /></SwiperSlide>
                                <SwiperSlide><Image className="Image-fluid" src="../../../assets/images/media/media-60.jpg" alt="Image" /></SwiperSlide>
                                <SwiperSlide><Image className="Image-fluid" src="../../../assets/images/media/media-61.jpg" alt="Image" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Thumbs Gallery
                            </div>
                        </div>
                        <div className="card-body">
                            <Swiper
                                spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-preview-details bd-gray-100 product-details-page">
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-1.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-2.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-3.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-6.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-7.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-10.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-11.jpg" alt="Image" />
                                </SwiperSlide>

                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="swiper-view-details swiper-view mt-2 thumbsgallery">
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-1.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-2.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-3.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-6.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-7.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-10.jpg" alt="Image" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="Image-fluid rounded" src="../../../assets/images/media/media-11.jpg" alt="Image" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Swiperjs.layout = "Contentlayout"

export default Swiperjs;