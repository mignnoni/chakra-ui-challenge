import { Flex } from "@chakra-ui/react";
import { Navigation, Pagination, EffectFade } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";

import { Slide } from "./Slide";

export function Slideshow() {
    return (
        <Flex maxW={1240} h="450" bg="gray.800" mb="10">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide
                        continentName="Europa"
                        description="O continente mais antigo"
                        imageURL="/images/europe.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        continentName="Ásia"
                        description="O continente mais antigo"
                        imageURL="/images/asia.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        continentName="África"
                        description="O continente mais antigo"
                        imageURL="/images/africa.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        continentName="América"
                        description="O continente mais antigo"
                        imageURL="/images/america.png"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        continentName="Oceania"
                        description="O continente mais antigo"
                        imageURL="/images/oceania.png"
                    />
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}
