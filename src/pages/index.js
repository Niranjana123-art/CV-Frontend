import { lazy } from "react";

export const SignUp = lazy(() => import("./SignUp/SignUp"));
export const Login = lazy(() => import("./Login/Login"));
export const DetailAdd = lazy(() => import("./DetailAdd/DetailAdd"));
export const DetailAddTwo = lazy(() => import("./DetailAddTwo/DetailAddTwo"));
export const Profile = lazy(() => import("./Profile/Profile"));
export const PersonalityScore = lazy(() => import("./PersonalityScore/PersonalityScore"));
export const AptitudeScore = lazy(() => import("./AptitudeScore/AptitudeScore"));