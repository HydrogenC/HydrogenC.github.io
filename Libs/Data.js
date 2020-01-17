const header = "<div class='inner-banner lower-banner'><a class='logo' href='index.html'></a><a href='index.html' class='top-banner-item'>Home Page</a><a href='Products.html' class='top-banner-item'>Software List</a></div>";
const footer = "<hr/><p class='footer'>Copyright LZ-AHS<sup>&copy;</sup> 1984 ~ 2017, subcompany of ExMatics&trade; Inc (ExMTS&trade; Inc for short). </p><p class='footer'>LZ-AHS<sup>&copy;</sup>, LZMC<sup>&copy;</sup>, HZXCP<sup>&copy;</sup>, Integraphical<sup>&copy;</sup>, LZGame<sup><sup>&copy;</sup></sup> and ExTinct<sup><sup>&copy;</sup></sup> are all supcompanies of ExMatics&trade; Inc. </p>";
const dsection = "<div class='mask' style='display: none'></div><div class='download-section' style='display: none'><div class='top-box'><div class='icon'></div><h2 class='ds-title'></h2><h2 class='close' onclick='Close()'>X</h2></div><div class='middle-box'><div class='one'><p class='large'>Select Version</p><select class='select' onchange='Change(this.value)'></select><p class='mini'>Information</p><p class='small des'></p><p class='small'>Name: <span class='nme'></span></p><p class='small'>Version: <span class='vsn'></span></p><p class='small'>Size: <span class='size'></span></p></div><div class='two'><p class='large'>Links</p><p class='mini'>Overview</p><div class='lnks local'></div><p class='mini'>Downloads</p><div class='lnks ext'></div></div></div><div class='bottom-box'><a class='btn legacy-page' target='_blank'>Legacy Page</a><a class='btn next-step' onclick='NextStep()'>Next Step</a></div></div>";

var softwares = [
    [
        [
            {
                Name: "AutoCAD",
                Version: "2020",
                Size: "2.29 GB",
                Description: "A popular low-end CAD software, mainly used to make 2D drawings and elementary 3D-modeling. ",
                Files: [
                    {
                        Name: "Official Website",
                        Path: "https://www.autodesk.com.cn/products/autocad/"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/autocad/free-trial/"
                    }
                ]
            },
            {
                Name: "AutoCAD Architecture",
                Version: "2020",
                Size: "2.61 GB",
                Description: "Streamline architectural design and drafting software. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/AutoCAD_Architecture/AutoCAD_Architecture_2020_Chinese_Simplified_Win_64bit_dlm_001_002.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/AutoCAD_Architecture/AutoCAD_Architecture_2020_Chinese_Simplified_Win_64bit_dlm_002_002.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/autocad-architecture/free-trial"
                    }
                ]
            },
            {
                Name: "AutoCAD Civil 3D",
                Version: "2020",
                Size: "4.15 GB",
                Description: "Software to design better civil infrastructure. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/AutoCAD_Civil_3D/AutoCAD_Civil3D_2017_English_Win_64bit_dlm_001_003.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/AutoCAD_Civil_3D/AutoCAD_Civil3D_2017_English_Win_64bit_dlm_002_003.sfx.exe"
                    },
                    {
                        Name: "File 3",
                        Path: "Resources/3D/Autodesk/AutoCAD_Civil_3D/AutoCAD_Civil3D_2017_English_Win_64bit_dlm_003_003.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/autocad-civil-3d/free-trial"
                    }
                ]
            },
            {
                Name: "AutoCAD Electrical",
                Version: "2020",
                Size: "2.51 GB",
                Description: "AutoCAD Electrical software includes all the functionality of familiar AutoCAD software, plus a complete set of electrical design CAD features. ",
                Files: [],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/autocad-civil-3d/free-trial"
                    }
                ]
            },
            {
                Name: "AutoCAD Map 3D",
                Version: "2020",
                Size: "2.51 GB",
                Description: "A model-based GIS and mapping software. ",
                Files: [],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/autocad-civil-3d/free-trial"
                    }
                ]
            },
            {
                Name: "AutoCAD Mechanical",
                Version: "2020",
                Size: "2.43 GB",
                Description: "A mechanical design software for manufacturing. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/AutoCAD_Electrical/AutoCAD_Electrical_2020_Simplified_Chinese_Win_64bit_dlm_001_002.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/AutoCAD_Electrical/AutoCAD_Electrical_2020_Simplified_Chinese_Win_64bit_dlm_002_002.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/autocad-mechanical/free-trial"
                    }
                ]
            },
            {
                Name: "AutoCAD MEP",
                Version: "2020",
                Size: "2.90 GB",
                Description: "MEP software for designers and drafters. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/AutoCAD_MEP/AutoCAD_MEP_2020_Chinese_Simplified_Win_64bit_dlm_001_002.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/AutoCAD_MEP/AutoCAD_MEP_2020_Chinese_Simplified_Win_64bit_dlm_001_002.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/autocad-mep/free-trial"
                    }
                ]
            },
            {
                Name: "AutoCAD Plant 3D",
                Version: "2020",
                Size: "2.83 GB",
                Description: "AutoCAD Plant 3D software enables plant designers and engineers to efficiently produce P&IDs, and then integrate them into a 3D plant design model. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/AutoCAD_Plant_3D/AutoCAD_Plant_3D_2020_Simplified_Chinese_Win_64bit_dlm_001_002.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/AutoCAD_Plant_3D/AutoCAD_Plant_3D_2020_Simplified_Chinese_Win_64bit_dlm_002_002.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/autocad-plant-3d/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "Autodesk Alias AutoStudio",
                Version: "2020",
                Size: "4.49 GB",
                Description: "Alias industrial design software provides sketching, concept modeling, surfacing, and visualization tools for industrial, product, and automotive design. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/Alias_Autostudio/Autodesk_ALAUST_2020_Enu_64bit_dlm_001_003.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/Alias_Autostudio/Autodesk_ALAUST_2020_Enu_64bit_dlm_002_003.sfx.exe"
                    },
                    {
                        Name: "File 3",
                        Path: "Resources/3D/Autodesk/Alias_Autostudio/Autodesk_ALAUST_2020_Enu_64bit_dlm_003_003.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/education/free-software/alias-autostudio"
                    }
                ]
            }
        ],
        [
            {
                Name: "Inventor",
                Version: "2020",
                Size: "5.45 GB",
                Description: "3D CAD software for product development. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/Inventor/Inventor_2020_English_Win_64bit_dlm_001_003.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/Inventor/Inventor_2020_English_Win_64bit_dlm_002_003.sfx.exe"
                    },
                    {
                        Name: "File 3",
                        Path: "Resources/3D/Autodesk/Inventor/Inventor_2020_English_Win_64bit_dlm_003_003.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/inventor/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "Rhino",
                Version: "6.3.18090",
                Size: "234 MB",
                Description: "Rhinoceros is a commercial CAD application software. ",
                Files: [
                    {
                        Name: "Download Rhino",
                        Path: "Resources/3D/Rhino/rhino_zh-cn_6.2.18065.11031.exe"
                    },
                    {
                        Name: "Download Bungo",
                        Path: "Resources/3D/Rhino/Bongo_20_Release_x64_Simplified_Chinese_20140205.msi"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.rhino3d.com/download/rhino-for-windows/6/evaluation"
                    }
                ]
            }
        ],
        [
            {
                Name: "PTC Creo",
                Version: "M040",
                Size: "4.09 GB",
                Description: "Creo is a suite of design software supporting product design for discrete manufacturers. ",
                Files: [
                    {
                        Name: "Download Installation",
                        Path: "Resources/3D/CAD/Creo/PTC.Creo.4.0.M040.Win64.iso"
                    },
                    {
                        Name: "Download Crack",
                        Path: "Resources/3D/CAD/Creo/Creo_Crack.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Siemens NX",
                Version: "12.01",
                Size: "5.51 GB",
                Description: "UG NX, is an advanced high-end CAD/CAM/CAE, since 2007 owned by by Siemens PLM Software. You need to install JDK 9 to run it. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/CAD/NX/SIEMENS_NX_12.0.1_With_Crack.iso"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Solid Edge",
                Version: "ST10",
                Size: "4.92 GB",
                Description: "Solid Edge is a 3D CAD, parametric feature (history based) and synchronous technology solid modeling software. ",
                Files: [
                    {
                        Name: "Download Installation Files",
                        Path: "Resources/3D/CAD/SolidEdge/SIEMENS_Solid_Edge_ST10_x64.iso"
                    },
                    {
                        Name: "Download Standard Libreries",
                        Path: "Resources/3D/CAD/SolidEdge/Solid_Edge_Standard_Parts_ST10.iso"
                    },
                    {
                        Name: "Download Crack",
                        Path: "Resources/3D/CAD/SolidEdge/SolidEdge_Crack.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "CATIA",
                Version: "V5-6R2017",
                Size: "1.79 GB",
                Description: "CATIA is a multi-platform software suite for CAD, CAM, CAE, PLM and 3D. ",
                Files: [
                    {
                        Name: "Download Installation",
                        Path: "Resources/3D/CAD/CATIA/DS.CATIA.P3.V5-6R2017.GA.Win64.iso"
                    },
                    {
                        Name: "Download Crack",
                        Path: "Resources/3D/CAD/CATIA/CATIA_Crack.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "SolidWorks",
                Version: "2020 SP2",
                Size: "13.8 GB",
                Description: "SolidWorks is a solid modeling computer-aided design (CAD) and computer-aided engineering (CAE) computer program that runs on Microsoft Windows. ",
                Files: [
                    {
                        Name: "Download Installation",
                        Path: "Resources/3D/CAD/SolidWorks/SolidWorks.2020.SP2.0.Premium.DVD.iso"
                    },
                    {
                        Name: "Download Keygen",
                        Path: "Resources/3D/CAD/SolidWorks/SolidWorks_Crack.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ]
    ],
    [
        [
            {
                Name: "Autodesk Revit",
                Version: "2020",
                Size: "3.99 GB",
                Description: "Revit is software for BIM. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/Revit/Revit_2020_G1_Win_64bit_dlm_001_003.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/Revit/Revit_2020_G1_Win_64bit_dlm_002_003.sfx.exe"
                    },
                    {
                        Name: "File 3",
                        Path: "Resources/3D/Autodesk/Revit/Revit_2020_G1_Win_64bit_dlm_003_003.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/revit-family/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "Advance Steel",
                Version: "2020",
                Size: "3.11 GB",
                Description: "3D modeling software for steel detailing. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/Advance_Steel/Advance_Steel_2020_G1_Win_64bit_dlm_001_002.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/Advance_Steel/Advance_Steel_2020_G1_Win_64bit_dlm_002_002.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com/products/advance-steel/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "Navisworks Manage",
                Version: "2020",
                Size: "2.27 GB",
                Description: "Project review software for AEC professionals. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/Navisworks_Manage/Autodesk_Navisworks_Manage_2020_Multilingual_Win_64bit_dlm_001_002.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/Navisworks_Manage/Autodesk_Navisworks_Manage_2020_Multilingual_Win_64bit_dlm_002_002.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com/products/navisworks/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "Infraworks",
                Version: "2020",
                Size: "1.88 GB",
                Description: "Infrastructure design software. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/Autodesk/Infraworks/Autodesk_InfraWorks_2020_Multilingual_Win_64bit_DLM.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com/products/infraworks/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "ArchiCAD",
                Version: "21",
                Size: "1.92 GB",
                Description: "ARCHICAD is an architectural BIM CAD software developed by the Hungarian company Graphisoft. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/BIM/ARCHICAD-21-INT-3005-1.2.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "http://www.graphisoft.com/downloads/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Tekla Structures",
                Version: "2020",
                Size: "987 MB",
                Description: "Tekla Structures is a building information modeling software able to model structures that incorporate different kinds of building materials, including steel and concrete. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/BIM/Tekla.Structures.2020.rar"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://download.tekla.com/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Vectorworks",
                Version: "2020",
                Size: "2.49 GB",
                Description: "Vectorworks is a global design software serving the architecture, landscape and entertainment industries. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/BIM/Vectorworks-2020-SP2-SeriesE.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "http://www.vectorworks.net/trial/form"
                    }
                ]
            }
        ],
        [
            {
                Name: "ArcGIS Pro",
                Version: "2.1",
                Size: "991 MB",
                Description: "ArcGIS Pro is a geographic information system (GIS) for working with maps and geographic information. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/ArcGISPro_21_161559.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "http://www.esri.com/arcgis/trial"
                    }
                ]
            }
        ]
    ],
    [
        [
            {
                Name: "Autodesk 3ds Max",
                Version: "2020",
                Size: "2.93 GB",
                Description: "A powerful modelling & animating tool. ",
                Files: [
                    {
                        Name: "File 1",
                        Path: "Resources/3D/Autodesk/3ds_Max/Autodesk_3ds_Max_2020_EFGJKPS_Win_64bit_dlm_001_002.sfx.exe"
                    },
                    {
                        Name: "File 2",
                        Path: "Resources/3D/Autodesk/3ds_Max/Autodesk_3ds_Max_2020_EFGJKPS_Win_64bit_dlm_002_002.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/3ds-max/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "Autodesk Maya",
                Version: "2020",
                Description: "Maya 3D animation, modeling, simulation, and rendering software provides an integrated, powerful toolset. ",
                Size: "1.41 GB",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/Autodesk/Maya/Autodesk_Maya_2020_EN_JP_ZH_Win_64bit_dlm.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com.cn/products/maya/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "Mudbox",
                Version: "2020",
                Size: "0.84 GB",
                Description: "A 3D digital painting and sculpting software. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/Autodesk/Mudbox/Autodesk_MBX_2020_English_French_German_Japanese_Win_64bit_dlm.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com/products/mudbox/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "Motion Builder",
                Version: "2020",
                Size: "0.88 GB",
                Description: "A 3D character animation software. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/Autodesk/Motion_Builder/Autodesk_MotionBuilder_2020_EN_JP_ZH_Win_64bit_dlm.sfx.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.autodesk.com/products/motionbuilder/free-trial"
                    }
                ]
            }
        ],
        [
            {
                Name: "ZBrush",
                Version: "2020",
                Size: "1.03 GB",
                Description: "ZBrush is a digital sculpting tool that combines 3D/2.5D modeling, texturing and painting. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/ZBrush_2020.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Houdini",
                Version: "16.5.439",
                Size: "871 MB",
                Description: "Houdini is a 3D animation application software developed by Side Effects Software. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/houdini-16.5.439-win64-vc14.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.sidefx.com/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Mari",
                Version: "4.0v3",
                Size: "435 MB",
                Description: "Digital 3D painting and texturing software. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/Mari4.0v3-win-x86-release-64.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.foundry.com/products/mari/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Katana",
                Version: "2.6v4",
                Size: "191 MB",
                Description: "Powerful look development and lighting. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/Mari4.0v1-win-x86-release-64.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.foundry.com/products/mari/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Modo",
                Version: "12.0v1",
                Size: "735 MB",
                Description: "Includes 3D modeling, texturing & rendering tools. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/Modo12.0v1_Windows.msi"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.foundry.com/products/modo/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Cinema 4D",
                Version: "R19",
                Size: "8.07 GB",
                Description: "CINEMA 4D is a 3D modeling, animation, motion graphic and rendering application. ",
                Files: [
                    {
                        Name: "Part 1",
                        Path: "Resources/3D/Cinema_4D/MAXON_Cinema4D_R19.part1.rar"
                    },
                    {
                        Name: "Part 2",
                        Path: "Resources/3D/Cinema_4D/MAXON_Cinema4D_R19.part2.rar"
                    },
                    {
                        Name: "Part 3",
                        Path: "Resources/3D/Cinema_4D/MAXON_Cinema4D_R19.part3.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ],
    ],
    [
        [
            {
                Name: "Adobe Master Collection",
                Version: "CC 2020 #8.4",
                Size: "16.38 GB",
                Description: "All softwares of Adobe in this collection. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Other/CCFamily_CC_2020_MasterCol_v8.1%234_20200216.iso"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Nuke",
                Version: "11.1v3",
                Size: "654 MB",
                Description: "NUKE is a node-based digital compositing application developed by The Foundry, and used for television and film post-production. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/3D/Nuke11.1v3-win-x86-release-64.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.foundry.com/products/nuke/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Media Composer",
                Version: "2020.4",
                Size: "2.35 GB",
                Description: "Avid Media Composer is a film and video non-linear editing system (NLE) and is the flagship product of Avid Technology. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/EMU/Media_Composer_2020.4_Win.zip"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Sibelius",
                Version: "2020.4",
                Size: "930 MB",
                Description: "Sibelius is a scorewriter program developed and released by Sibelius Software (now part of Avid Technology). ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/EMU/Sibelius_Ultimate_2020.4_Win.exe"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "MuseScore",
                Version: "2.1.1",
                Size: "73 MB",
                Description: "MuseScore is a free scorewriter for Windows, macOS, and Linux, comparable to Finale and Sibelius, supporting a wide variety of file formats and input methods. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/EMU/MuseScore-2.1.1.msi"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Bitwig Studio",
                Version: "2.2.3 RC 1",
                Size: "195 MB",
                Description: "Bitwig Studio is a dynamic software for creation and performance of your musical ideas on stage or in the studio. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/EMU/Ableton_Live_10.0.1_Suite_Win.zip"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Ableton Live",
                Version: "10.0.1",
                Size: "1.61 GB",
                Description: "Ableton Live is a software music sequencer and digital audio workstation. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/EMU/Ableton_Live_10.0.1_Suite_Win.zip"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "FL Studio",
                Version: "12.5.1.165",
                Size: "670 MB",
                Description: "FL Studio features a graphical user interface based on a pattern-based music sequencer. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/EMU/flstudio_12.5.1.165.exe"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Reason",
                Version: "10.0.3",
                Size: "3.58 GB",
                Description: "Reason is a digital audio workstation for creating and editing music and audio developed by Swedish software developers Propellerhead Software. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/EMU/Reason_10.0.3.zip"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Studio One",
                Version: "3.5.6",
                Size: "2.70 GB",
                Description: "Studio One is a line of digital audio workstation (DAW) software used to create, record, mix and master music and other audio. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/EMU/StudioOne_3.5.6_Build_45910.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ]
    ],
    [
        [
            {
                Name: "Android Studio",
                Version: "173.4670197",
                Size: "683 MB",
                Description: "Java IDE for Android development, built on IntelliJ IDEA. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Android/android-studio-ide-173.4670197-windows.exe"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Visual Studio MultiVersion",
                Version: "15.6.4",
                Size: "35.3 GB",
                Description: "Includes Community, Professional and Enterprise. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Visual_Studio/VisualStudio_2017_15.6.4_MultiVersion.iso"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "IntelliJ IDEA",
                Version: "2020.1.1",
                Size: "513 MB",
                Description: "A powerful IDE for JVM languages. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Jetbrains/ideaIU-2020.1.1.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.jetbrains.com/idea/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Phpstorm",
                Version: "2020.1.1",
                Size: "208 MB",
                Description: "Light-weighted PHP & Web IDE, bundled PHP runtime. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Jetbrains/PhpStorm-2020.1.1.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.jetbrains.com/phpstorm/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "CLion",
                Version: "2020.1.1",
                Size: "233 MB",
                Description: "Light-weighted C/C++ IDE, bundled CMake. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Jetbrains/CLion-2020.1.1.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.jetbrains.com/clion/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "DataGrip",
                Version: "2020.1.1",
                Size: "130 MB",
                Description: "Light-weighted SQL IDE, compatible with SQL Server, Oracle Database & IBM DB2. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Jetbrains/datagrip-2020.1.1.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.jetbrains.com/datagrip/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "PyCharm",
                Version: "2020.1.1",
                Size: "243 MB",
                Description: "Light-weighted Python IDE, Python runtime needs to be installed manually. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Jetbrains/pycharm-professional-2020.1.1.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.jetbrains.com/pycharm/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Rider",
                Version: "2020.1 EAP6",
                Size: "277 MB",
                Description: "Light-weighted C# IDE, but not powerful in function. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Jetbrains/JetBrains.Rider-2020.1-EAP6-181.4379.538.Checked.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.jetbrains.com/rider/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "RubyMine",
                Version: "2020.1.1",
                Size: "213 MB",
                Description: "Powerful Ruby IDE, also the best choice for Ruby On Rails development. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Jetbrains/RubyMine-2020.1.1.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.jetbrains.com/rubymine/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "ReSharper Ultimate",
                Version: "2017.3.2",
                Size: "175 MB",
                Description: "A powerful extension for Visual Studio by Jetbrains. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Jetbrains/JetBrains.ReSharperUltimate.2020.1.EAP7.exe"
                    }
                ],
                ExternalHrefs: [
                    {
                        Name: "Official Download",
                        Path: "https://www.jetbrains.com/resharper/download/"
                    }
                ]
            }
        ],
        [
            {
                Name: "MyEclipse",
                Version: "2017 CI 10",
                Size: "1.58 GB",
                Description: "Java IDE built on Eclipse, used in enterprise development. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/myeclipse-2017-ci-10-offline-installer-windows.exe"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Qt",
                Version: "5.10.1",
                Size: "2.33 GB",
                Description: "IDE for C++ GUI development as well as cross-platform C++ development. ",
                Files: [
                    {
                        Name: "Download Qt",
                        Path: "Resources/Programming/Other/qt-opensource-windows-x86-5.10.1.exe"
                    },
                    {
                        Name: "Download Qt 3D Studio",
                        Path: "Resources/Programming/Other/qt-3dstudio-opensource-windows-x86-1.1.0.exe"
                    },
                    {
                        Name: "Download Qt VS Addin",
                        Path: "Resources/Programming/Other/qt-vsaddin-msvc2017-2.2.0.vsix"
                    }
                ],
                ExternalHrefs: []
            }
        ],
    ],
    [
        [
            {
                Name: "JDK 8",
                Version: "8u172",
                Size: "206 MB",
                Description: "Old version JDK, good compatibility. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Bases/jdk-8u172-windows-x64.exe"
                    }
                ],
                ExternalHrefs: []
            },
            {
                Name: "JDK 10",
                Version: "10.0.1",
                Size: "390 MB",
                Description: "Newest JDK, do not compat with Minecraft. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Bases/jdk-10.0.1_windows-x64_bin.exe"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: ".NET Framework 4.7.1",
                Version: "4.7.1",
                Size: "58 MB",
                Description: "Runtime for .NET applications. ",
                Files: [],
                ExternalHrefs: [
                    {
                        Name: "Download from Microsoft",
                        Path: "Resources/"
                    }
                ]
            }
        ],
        [
            {
                Name: "Golang",
                Version: "1.10.1",
                Size: "107 MB",
                Description: "Development base for go language. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Bases/go1.10.1.windows-amd64.msi"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Python 3",
                Version: "3.6.5",
                Size: "30 MB",
                Description: "Newest version of Python, overrides some functions of Python 2. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Bases/python-3.6.5-amd64.exe"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Android SDK",
                Version: "24.4.1",
                Size: "131 MB",
                Description: "Basic liberey needed in Android development, includes Android emulator. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Android/installer_r24.4.1-windows.exe"
                    }
                ],
                ExternalHrefs: []
            },
            {
                Name: "Android NDK",
                Version: "16B",
                Size: "734 MB",
                Description: "Provides native language (like C++) support in Android development. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Android/android-ndk-r16b-windows-x86_64.zip"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Node.js",
                Version: "9.11.1",
                Size: "16 MB",
                Description: "Development base for Node.js applications. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Bases/node-v9.11.1-x64.msi"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Chrome",
                Version: "65.0.3325.146",
                Size: "44 MB",
                Description: "Explorer and debugger for web languages. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/Bases/ChromeStandalone_65.0.3325.146_Setup.exe"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "SQL Server Developer",
                Version: "2017",
                Size: "1.64 GB",
                Description: "Full-featured free version of SQL Server. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Programming/SQL_Server/SQLServer2017-x64-CHS-Dev.iso"
                    },
                    {
                        Name: "Download Essentials (SSMS and Connections)",
                        Path: "Resources/Programming/SQL_Server/SQL_Server_2017_Essentials.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ]
    ],
    [
        [
            {
                Name: "Unity",
                Version: "2020.1.0 b13",
                Size: "3.13 GB",
                Description: "Unity is a cross-platform game engine developed by Unity Technologies, which is primarily used to develop both three-dimensional and two-dimensional video games and simulations for computers, consoles, and mobile devices. ",
                Files: [
                    {
                        Name: "Full Download",
                        Path: "Resources/Game_Engine/Unity/Unity-2020.1.0b13.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Unreal Engine",
                Version: "4.19.0",
                Size: "5.23 GB",
                Description: "The Unreal Engine is a game engine developed by Epic Games. Although primarily developed for first-person shooters, it has been successfully used in a variety of other genres. ",
                Files: [
                    {
                        Name: "Full Download",
                        Path: "Resources/Game_Engine/UE_4.19.1.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Cry Engine 5.5",
                Version: "5.5 Preview 1",
                Size: "842 MB",
                Description: "This is a PREVIEW version of CryEngine. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Game_Engine/CryEngine_5.5_Preview_1.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Cocos Creator",
                Version: "1.9.0",
                Size: "658 MB",
                Description: "A HTML game engine. ",
                Files: [
                    {
                        Name: "Full Download",
                        Path: "Resources/Game_Engine/CocosCreator_v1.9.0_20200314_win.exe"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Lumberyard",
                Version: "1.13.0.0",
                Size: "6.71 GB",
                Description: "Amazon Lumberyard is a free cross-platform triple-A game engine developed by Amazon and based on the architecture of CryEngine, which was licensed from Crytek in 2015. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Game_Engine/Lumberyard_1.13.0.0.rar"
                    }
                ],
                ExternalHrefs: []
            }
        ]
    ],
    [
        [
            {
                Name: "Office 2016",
                Version: "2016",
                Size: "1.02 GB",
                Description: "Microsoft Office is an office suite of applications, servers, and services developed by Microsoft. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Other/SW_DVD5_Office_Professional_Plus_2016_64Bit_ChnSimp_MLF_X20-42426.ISO"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Windows 10 x64",
                Version: "10.0 1709",
                Size: "4.53 GB",
                Description: "Windows NT 10.0 x64 Version 1709. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Other/cn_windows_10_multi-edition_vl_version_1709_updated_dec_2017_x64_dvd_100406208.iso"
                    }
                ],
                ExternalHrefs: []
            }
        ],
        [
            {
                Name: "Windows Server 2016 x64",
                Version: "10.0",
                Size: "5.75 GB",
                Description: "Windows NT Server 10.0 x64. ",
                Files: [
                    {
                        Name: "Local Download",
                        Path: "Resources/Other/cn_windows_server_2016_vl_x64_dvd_11636695.iso"
                    }
                ],
                ExternalHrefs: []
            }
        ]
    ]
];

var menuItems = [
    [
        {
            Name: "AutoCAD",
            Description: "An CAD software. Includes 8 versions of AutoCAD. ",
            LogoHref: "Imgs/Logos/Autodesk/AutoCAD-2.png"
        },
        {
            Name: "Alias",
            Description: "Industrial design and Class-A surfacing software. ",
            LogoHref: "Imgs/Logos/Autodesk/AutoCAD-1.png"
        },
        {
            Name: "Inventor",
            Description: "3D CAD software for product development! ",
            LogoHref: "Imgs/Logos/Autodesk/Inventor.png"
        },
        {
            Name: "Rhino",
            Description: "A commercial 3D CAD application! ",
            LogoHref: "Imgs/Logos/Qm.png"
        },
        {
            Name: "PTC Creo",
            Description: "A high-end mixed CAD/CAE/CAM software. ",
            LogoHref: "Imgs/Logos/PTC.png"
        },
        {
            Name: "Siemens NX",
            Description: "An advanced high-end mixed CAD/CAM/CAE software! ",
            LogoHref: "Imgs/Logos/SIEMENS.png"
        },
        {
            Name: "Solid Edge",
            Description: "A parametric 3D CAD by SIEMENS! ",
            LogoHref: "Imgs/Logos/SIEMENS.png"
        },
        {
            Name: "CATIA",
            Description: "A software suite for CAD/CAE/CAM! ",
            LogoHref: "Imgs/Logos/Dassault.png"
        },
        {
            Name: "SolidWorks",
            Description: "A 3D CAD and CAE! ",
            LogoHref: "Imgs/Logos/Dassault.png"
        }
    ],
    [
        {
            Name: "Revit",
            Description: "A software for BIM. ",
            LogoHref: "Imgs/Logos/Autodesk/Revit.png"
        },
        {
            Name: "Advance Steel",
            Description: "3D modeling software for steel detailing. ",
            LogoHref: "Imgs/Logos/Autodesk/Atd-2.png"
        },
        {
            Name: "Navisworks",
            Description: "A Project review software for AEC professionals! ",
            LogoHref: "Imgs/Logos/Autodesk/Atd-3.png"
        },
        {
            Name: "Infraworks",
            Description: "An infrastructure design software. ",
            LogoHref: "Imgs/Logos/Autodesk/Atd-1.png"
        },
        {
            Name: "ArchiCAD",
            Description: "BIM development tool! ",
            LogoHref: "Imgs/Logos/BIM.png"
        },
        {
            Name: "Tekla Structures",
            Description: "Steel structure designing tool. ",
            LogoHref: "Imgs/Logos/BIM.png"
        },
        {
            Name: "Vectorworks",
            Description: "BIM development tool! ",
            LogoHref: "Imgs/Logos/BIM.png"
        },
        {
            Name: "ArcGIS",
            Description: "Advanced GIS tool! ",
            LogoHref: "Imgs/Logos/Global.png"
        }
    ],
    [
        {
            Name: "3ds Max",
            Description: "A 3D modeling and animation program. ",
            LogoHref: "Imgs/Logos/Autodesk/3DS.png"
        },
        {
            Name: "Maya",
            Description: "Computer animation & modeling software. ",
            LogoHref: "Imgs/Logos/Autodesk/Maya.png"
        },
        {
            Name: "Mudbox",
            Description: "A 3D digital painting & sculpting software. ",
            LogoHref: "Imgs/Logos/Autodesk/Mudbox.png"
        },
        {
            Name: "Motion Builder",
            Description: "A 3D character animation software. ",
            LogoHref: "Imgs/Logos/Autodesk/MotionBuilder.png"
        },
        {
            Name: "ZBrush",
            Description: " A digital sculpting tool. ",
            LogoHref: "Imgs/Logos/ZBrush.png"
        },
        {
            Name: "Houdini",
            Description: "A high-end 3D animation package. ",
            LogoHref: "Imgs/Logos/Houdini.png"
        },
        {
            Name: "Mari",
            Description: "Digital 3D painting and texturing software. ",
            LogoHref: "Imgs/Logos/Mari.png"
        },
        {
            Name: "Katana",
            Description: "Powerful look development and lighting. ",
            LogoHref: "Imgs/Logos/Mari.png"
        },
        {
            Name: "Modo",
            Description: "3D modeling, texturing & rendering tools. ",
            LogoHref: "Imgs/Logos/Modo.png"
        },
        {
            Name: "Cinema 4D",
            Description: "A 3D modeling, animation and motion application. ",
            LogoHref: "Imgs/Logos/Cinema4D.png"
        }
    ],
    [
        {
            Name: "Adobe Col",
            Description: "All of the softwares by Adobe. ",
            LogoHref: "Imgs/Logos/Adobe/Photoshop-2.png"
        },
        {
            Name: "Nuke",
            Description: "Powerful compositing, editorial and review software. ",
            LogoHref: "Imgs/Logos/Nuke.png"
        },
        {
            Name: "Media Composer",
            Description: "Avid Media Composer is a film and video NLE. ",
            LogoHref: "Imgs/Logos/Avid-2.png"
        },
        {
            Name: "Sibelius",
            Description: "Sibelius is a scorewriter program developed by Avid. ",
            LogoHref: "Imgs/Logos/Sibelius.png"
        },
        {
            Name: "MuseScore",
            Description: "A free scorewriter program. ",
            LogoHref: "Imgs/Logos/Muse.png"
        },
        {
            Name: "Bitwig Studio",
            Description: "Bitwig Studio is a DAW software. ",
            LogoHref: "Imgs/Logos/Audio.png"
        },
        {
            Name: "Ableton Live",
            Description: "Ableton Live is a software music sequencer and DAW. ",
            LogoHref: "Imgs/Logos/Ableton.png"
        },
        {
            Name: "FL Studio",
            Description: "FL Studio (formerly known as FruityLoops) is a DAW. ",
            LogoHref: "Imgs/Logos/FLStudio.png"
        },
        {
            Name: "Reason",
            Description: "Reason is a DAW for creating and editing music. ",
            LogoHref: "Imgs/Logos/Reason.png"
        },
        {
            Name: "Studio One",
            Description: "Studio One is a line of digital audio workstation. ",
            LogoHref: "Imgs/Logos/StudioOne.png"
        }
    ],
    [
        {
            Name: "Android Studio",
            Description: "Android IDE based on IntelliJ Community. ",
            LogoHref: "Imgs/Logos/Android.png"
        },
        {
            Name: "Visual Studio",
            Description: "Powerful IDE for .NET, C++, Python, Web, R and more! ",
            LogoHref: "Imgs/Logos/Microsoft/VS.png"
        },
        {
            Name: "IntelliJ IDEA",
            Description: "IDE for JVM languages. ",
            LogoHref: "Imgs/Logos/Jetbrains/IntelliJ-IDEA.png"
        },
        {
            Name: "PhpStorm",
            Description: "Lightweight PHP IDE for Web development.  ",
            LogoHref: "Imgs/Logos/Jetbrains/PhpStorm.png"
        },
        {
            Name: "CLion",
            Description: "An Intelligent C++ IDE by Jetbrains! ",
            LogoHref: "Imgs/Logos/Jetbrains/CLion.png"
        },
        {
            Name: "DataGrip",
            Description: "IDE for SQL development, works with almost all databases! ",
            LogoHref: "Imgs/Logos/Jetbrains/DataGrip.png"
        },
        {
            Name: "PyCharm",
            Description: "An IDE for Python by Jetbrains. ",
            LogoHref: "Imgs/Logos/Jetbrains/PyCharm.png"
        },
        {
            Name: "Rider",
            Description: "An light-weight IDE for DotNet languages! ",
            LogoHref: "Imgs/Logos/Jetbrains/Rider.png"
        },
        {
            Name: "RubyMine",
            Description: "Ruby & Ruby On Rails IDE! ",
            LogoHref: "Imgs/Logos/Jetbrains/RubyMine.png"
        },
        {
            Name: "ReSharper",
            Description: "An extension for Visual Studio, improves many functions. ",
            LogoHref: "Imgs/Logos/Jetbrains/ReSharper.png"
        },
        {
            Name: "MyEclipse",
            Description: "Powerful IDE based on Eclipse. ",
            LogoHref: "Imgs/Logos/Eclipse.png"
        },
        {
            Name: "Qt",
            Description: "C++ IDE for cross-platform and GUI development! ",
            LogoHref: "Imgs/Logos/Qt.png"
        }
    ],
    [
        {
            Name: "JDK",
            Description: "Java Development Kit 8 & 9. ",
            LogoHref: "Imgs/Logos/Java256.png"
        },
        {
            Name: ".NET FrmWork",
            Description: "Runtime for all languages based on Microsoft DotNet. ",
            LogoHref: "Imgs/Logos/Microsoft/DotNet.png"
        },
        {
            Name: "Golang",
            Description: "SDK for Go language. ",
            LogoHref: "Imgs/Logos/Golang.png"
        },
        {
            Name: "Anaconda",
            Description: "A package that includes python. ",
            LogoHref: "Imgs/Logos/Python.png"
        },
        {
            Name: "Android SDK",
            Description: "Includes Android SDK and Android NDK. ",
            LogoHref: "Imgs/Logos/Android.png"
        },
        {
            Name: "Node.js",
            Description: "SDK for Node.js applications. ",
            LogoHref: "Imgs/Logos/NodeJS.png"
        },
        {
            Name: "Chrome",
            Description: "Debugger for HTML/JS/CSS. ",
            LogoHref: "Imgs/Logos/Chrome.png"
        },
        {
            Name: "SQL Server",
            Description: "Microsoft SQL Server is a relational database management system. ",
            LogoHref: "Imgs/Logos/Microsoft/SQLServer.png"
        }
    ],
    [
        {
            Name: "Unity",
            Description: "A cross-platform game engine. ",
            LogoHref: "Imgs/Logos/Unity.png"
        },
        {
            Name: "Unreal Engine",
            Description: "The Unreal Engine is a game engine. ",
            LogoHref: "Imgs/Logos/Unreal.png"
        },
        {
            Name: "Cry Engine",
            Description: "CryEngine is a game engine by Crytek. ",
            LogoHref: "Imgs/Logos/CryEngine.png"
        },
        {
            Name: "Cocos Creator",
            Description: "Cocos is a game engine for HTML. ",
            LogoHref: "Imgs/Logos/Cocos.jpg"
        },
        {
            Name: "Lumberyard",
            Description: "A game engine built on CryEngine 3. ",
            LogoHref: "Imgs/Logos/Amazon.png"
        }
    ],
    [
        {
            Name: "Microsoft Office",
            Description: "An office suite of applications, servers and services. ",
            LogoHref: "Imgs/Logos/Microsoft/Office.png"
        },
        {
            Name: "Windows 10",
            Description: "Windows 10 by Microsoft. ",
            LogoHref: "Imgs/Logos/Microsoft/Win10.png"
        },
        {
            Name: "Windows Server",
            Description: "Windows Server 2016. ",
            LogoHref: "Imgs/Logos/Microsoft/WinUP.png"
        }
    ]
];

var divList = [
    {
        ClassName: "itm-cad",
        ID: "CAD",
        NameOnMenu: "CAD",
        Description: "CAD / CAID"
    },
    {
        ClassName: "itm-bim",
        ID: "BUILDING",
        NameOnMenu: "BIM",
        Description: "BIM / GIS"
    },
    {
        ClassName: "itm-mod",
        ID: "MODEL",
        NameOnMenu: "Model & Animate",
        Description: "Modeling / Animating"
    },
    {
        ClassName: "itm-mda",
        ID: "MultiMedia",
        NameOnMenu: "MultiMedia",
        Description: "MultiMedia Software"
    },
    {
        ClassName: "itm-ide",
        ID: "IDE",
        NameOnMenu: "IDE",
        Description: "IDE / IDE Extensions"
    },
    {
        ClassName: "itm-lan",
        ID: "Languages",
        NameOnMenu: "SDK",
        Description: "SDK / Language Bases"
    },
    {
        ClassName: "itm-gam",
        ID: "GE",
        NameOnMenu: "Game Engine",
        Description: "Game Engine"
    },
    {
        ClassName: "itm-mst",
        ID: "MS",
        NameOnMenu: "Microsoft",
        Description: "Microsoft Products"
    }
];
