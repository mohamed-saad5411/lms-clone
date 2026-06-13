import React from 'react'
import Categories from '../ui/Categories'
import FeaturedCourses from '../ui/FeaturedCourses'
import HowItWorks from '../ui/HowItWorks'
import Hero from '../ui/Hero'
import Instructors from '../ui/Instructors'
import Testimonials from '../ui/Testimonials'
import Banner from '../ui/Banner'
import TrustedCompanies from '../ui/TrustedCompanies'

export default function LandingPage() {
    return <>
        {/* 
Hero.tsx .........
SearchBar.tsx 
Categories.tsx ........
FeaturedCourses.tsx ........
CourseCard.tsx
TopInstructors.tsx .........
Companies.tsx
Benefits.tsx
Testimonials.tsx .........
InstructorCTA.tsx
 */}

        <div className="bg-gray-100">
            <Hero />
            {/* // الـ banner الكبير — headline + subtext + search + صورة */}
            <TrustedCompanies />
            {/* // "Trusted by" — شعارات الشركات */}
            <Categories />
            {/* // شريط الـ categories (Web Dev, Design, etc.) */}
            <FeaturedCourses />
            {/* // "Most Popular" — grid من الكورسات */}
            {/* <HowItWorks /> */}
            {/* // 3 خطوات — Find, Buy, Learn (بسيطة وسريعة) */}
            <Instructors />
            {/* // "Top Instructors" — كروت بالصور والأسماء */}
            <Testimonials />
            {/* // آراء الطلاب — quotes + stars */}
            <Banner />
            {/* // CTA section — "Become an Instructor" مع button */}


        </div>
    </>
}
