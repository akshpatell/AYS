"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

const Thirdpage = () => {
  const [prog, setProg] = useState({
    clang: false,
    cpplang: false,
    csharp: false,
    swift: false,
    ruby: false,
    golang: false,
    java: false,
    javascript: false,
    typescript: false,
    php: false,
    perl: false,
    scala: false,
    python: false,
    clojure: false,
    haskell: false,
    rust: false,
    erlang: false,
    coffeescript: false,
  });
  const [front, setFront] = useState({
    angular: false,
    babel: false,
    bootstrap: false,
    css3: false,
    html5: false,
    gulp: false,
    pug: false,
    qt: false,
    reactjs: false,
    redux: false,
    sass: false,
    svelte: false,
    tailwindcss: false,
    vuejs: false,
    vuetify: false,
    webpack: false,
    ember: false,
  });
  const [back, setBack] = useState({
    nodejs: false,
    express: false,
    nestjs: false,
    nginx: false,
    hadoop: false,
    graphql: false,
  });
  const [mobile, setMobile] = useState({
    android: false,
    flutter: false,
    dart: false,
    kotlin: false,
    nativescript: false,
    xamarin: false,
    reactnative: false,
    ionic: false,
  });
  const [ml, setMl] = useState({
    tensorflow: false,
    pandas: false,
    opencv: false,
  });
  const [db, setDb] = useState({
    mongodb: false,
    mysql: false,
    postgresql: false,
    redis: false,
    oracle: false,
    hive: false,
    mariadb: false,
    elasticsearch: false,
  });
  const [dv, setDv] = useState({
    d3js: false,
    kibana: false,
    grafana: false,
  });
  const [dev, setDev] = useState({
    aws: false,
    jenkins: false,
    googlecloud: false,
    docker: false,
    kubernetes: false,
    bash: false,
    azure: false,
    vagrant: false,
    circleci: false,
    travis: false,
  });
  const [baas, setBaas] = useState({
    Firebase: false,
    heroku: false,
  });
  const [fram, setFram] = useState({
    django: false,
    dotnet: false,
    electron: false,
    symfony: false,
    laravel: false,
    codeigniter: false,
    Flask: false,
  });
  const [test, setTest] = useState({
    puppeteer: false,
    mocha: false,
    jest: false,
    selenium: false,
  });
  const [sw, setSw] = useState({
    illustrator: false,
    photoshop: false,
    xd: false,
    Figma: false,
    blender: false,
    sketch: false,
    invision: false,
    framer: false,
    matlab: false,
    postman: false,
  });
  const [ssg, setSsg] = useState({
    gatsbyjs: false,
    jekyll: false,
    nextjs: false,
    hexo: false,
  });
  const [ge, setGe] = useState({
    unity: false,
    unreal: false,
  });
  const [auto, setAuto] = useState({
    zapier: false,
    ifttt: false,
  });
  const [other, setOther] = useState({
    git: false,
    linux: false,
    arduino: false,
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full my-5">
        <div>
          <p className="text-5xl text-center max-sm:text-3xl max-lg:text-4xl">
            Skills💻
          </p>
        </div>
        <div className="border-2 flex flex-col rounded mt-3 w-[50vw] max-lg:w-[70vw] max-md:w-[90vw] max-sm:w-[96vw] px-2">
          <div className="outline-none border-b-2 p-2 text-xl">
            Programming Languages
          </div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image src="/images/c.png" alt="img" width={60} height={200} />
                <span>C</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/c++.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>C++</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/c-sharp.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>C-sharp</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/golang.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>golang</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/java.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>java</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/javascript.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>javascript</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/typescript.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>typescript</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/php.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>php</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/perl.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>perl</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/ruby.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>ruby</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/scala.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>scala</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/python.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>python</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/swift.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>swift</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/clojure.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>clojure</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/rust.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>rust</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/haskell.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>haskell</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/coffeescript.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>coffeescript</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/erlang.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>erlang</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">
            Frontend Development
          </div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/reactjs.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>Reactjs</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/svelte.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>svelte</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/vuejs.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>vuejs</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/vuetify.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>vuetify</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/webpack.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>webpack</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/tailwindcss.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>tailwindcss</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/sass.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>sass</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/redux.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>redux</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/pug.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>pug</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image src="/images/qt.png" alt="img" width={60} height={200} />
                <span>qt</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/html5.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>html5</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/css3.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>Css3</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/gulp.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>gulp</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/ember.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>ember</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/bootstrap.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>bootstrap</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/babel.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>babel</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/angular.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>angular</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">
            Backend Development
          </div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/nodejs.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>nodejs</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/express.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>express</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/graphql.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>graphql</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/hadoop.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>hadoop</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/nginx.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>nginx</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/nestjs.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>nestjs</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">
            Mobile App Development
          </div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/android.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>android</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/flutter.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>flutter</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <Image src="/images/dart.png" alt="img" width={60} height={200} />
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/kotlin.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>kotlin</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/nativescript.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>nativescript</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/xamarin.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>xamarin</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/reactnative.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>reactnative</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/ionic.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>ionic</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">AI/ML</div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/tensorflow.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>tensorflow</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/pandas.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>pandas</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/opencv.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>opencv</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">Database</div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/mongodb.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>mongodb</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/mysql.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>mysql</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/postgresql.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>postgresql</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/oracle.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>oracle</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/redis.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>redis</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/hive.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>hive</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/mariadb.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>mariadb</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/elasticsearch.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>elasticsearch</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">
            Data Visualization
          </div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/d3js.png"
                  alt="img"
                  width={50}
                  height={200}
                />

                <span>d3</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/kibana.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>kibana</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/grafana.png"
                  alt="img"
                  width={60}
                  height={200}
                />

                <span>grafana</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">Devops</div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/aws.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>Aws</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/docker.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>docker</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/jenkins.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>jenkins</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/googlecloud.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>googlecloud</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/kubernetes.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>kubernetes</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/bash.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>bash</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/azure.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>azure</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/vagrant.png"
                  alt="img"
                  width={50}
                  height={200}
                />
                <span>vagrant</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/circleci.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>circleci</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/travis.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>travis</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">
            Backend as a Service(BaaS)
          </div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/firebase.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>Firebase</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/heroku.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>heroku</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">Framework</div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/django.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>django</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/dotnet.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>dotnet</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/electron.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>electron</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/symfony.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>symfony</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/laravel.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>laravel</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/codeigniter.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>codeigniter</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/flask.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>Flask</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">Testing</div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/puppeteer.png"
                  alt="img"
                  width={50}
                  height={200}
                />
                <span>puppeteer</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/mocha.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>mocha</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/jest.png"
                  alt="img"
                  width={50}
                  height={200}
                />
                <span>jest</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/selenium.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>selenium</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">Software</div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/illustrator.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>illustrator</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/photoshop.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>photoshop</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/xd.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>xd</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/figma.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>Figma</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/blender.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>blender</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/sketch.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>sketch</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/invision.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>invision</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/framer.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>framer</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/matlab.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>matlab</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/postman.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>postman</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">
            Static Site Generators
          </div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/gatsbyjs.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>gatsbyjs</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/jekyll.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>jekyll</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/nextjs.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>nextjs</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/hexo.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>hexo</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">
            Game Engines
          </div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/unity.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>unity</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/unreal.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>unreal</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">Automation</div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/zapier.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>zapier</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/ifttt.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>ifttt</span>
              </div>
            </div>
          </div>

          <div className="outline-none border-b-2 p-2 text-xl">Other</div>
          <div className="grid grid-cols-4 gap-5 py-3 max-sm:grid-cols-2 max-md:grid-cols-3">
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/git.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>git</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/linux.gif"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>linux</span>
              </div>
            </div>
            <div className="flex justify-center items-center py-2 gap-3">
              <input type="checkbox" className="cursor-pointer w-5 h-5" />
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/images/arduino.png"
                  alt="img"
                  width={60}
                  height={200}
                />
                <span>arduino</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-10 pt-4 w-full justify-center mb-3">
            <Link
              className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md max "
              href="/secondpage"
            >
              <AiOutlineLeft />
              Prev
            </Link>
            <Link
              className="flex items-center justify-center py-2 px-4 bg-red-500 text-white rounded-md"
              href="/forthpage"
            >
              Next
              <AiOutlineRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdpage;
