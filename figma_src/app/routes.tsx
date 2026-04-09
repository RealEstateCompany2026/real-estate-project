import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

// Page imports
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Database from "./pages/Database";
import Clients from "./pages/Clients";
import Properties from "./pages/Properties";
import Deals from "./pages/Deals";
import Documents from "./pages/Documents";
import Calendar from "./pages/Calendar";
import Automations from "./pages/Automations";

// Auth pages (legacy - to be replaced)
import Login from "./pages/auth/Login";
import RegisterStep1 from "./pages/auth/RegisterStep1";
import RegisterStep2 from "./pages/auth/RegisterStep2";
import RegisterStep3 from "./pages/auth/RegisterStep3";
import RegisterStep4 from "./pages/auth/RegisterStep4";
import OnboardingWizard from "./pages/auth/OnboardingWizard";

// Sign Up Parcours (SUP)
import {
  SUP_00_LandingPage,
  SUP_01_MethodChoice,
  SUP_02_EmailPasswordForm,
  SUP_03_VerifyEmail,
  SUP_04_PersonaRouting,
  SUP_05A_ProfileSolo,
  SUP_05B_ProfileAgency,
  SUP_06_TeamInvitation,
  SUP_07_Confirmation,
} from "./pages/signup";

// Sign In Parcours (SIN)
import {
  SIN_01_SignIn,
  SIN_02_ForgotPasswordEmail,
  SIN_03_ForgotPasswordConfirmation,
  SIN_04_NewPassword,
  SIN_05_PasswordResetConfirmation,
  SIN_06_LinkExpired,
  SIN_07_AccountLocked,
  SIN_08_InvitationSignup,
} from "./pages/signin";

// Onboarding Parcours (OBT)
import {
  OBT_00_WelcomeModal,
  OBT_01_SpotlightDashboard,
  OBT_02_SpotlightNavigation,
  OBT_03_SpotlightIA,
  OBT_04_SpotlightImport,
  OBT_05_SpotlightHelp,
  OBT_06_TransitionModal,
} from "./pages/onboarding";

// Setup Parcours (OBS)
import {
  OBS_00_StepperSetup,
  OBS_01_ProfilProfessionnel,
  OBS_02_Organisation,
  OBS_03_Documents,
  OBS_04_Parametres,
  OBS_05_Confirmation,
} from "./pages/setup";

// Import Parcours (IMP)
import {
  IMP_01_ChoixTypeImport,
  IMP_02_UploadFichier,
  IMP_03_MappingColonnes,
  IMP_04_Previsualisation,
  IMP_05_ImportEnCours,
  IMP_06_Resultat,
  IMP_07_ErreurParsing,
} from "./pages/import";

// Parcours pages
import P01Demo from "./pages/P01Demo";
import P02Demo from "./pages/P02Demo";
import P03Demo from "./pages/P03Demo";
import P04Demo from "./pages/P04Demo";
import P05Demo from "./pages/P05Demo";
import P06Demo from "./pages/P06Demo";
import P07Demo from "./pages/P07Demo";
import P08Demo from "./pages/P08Demo";
import P09Demo from "./pages/P09Demo";
import P10Demo from "./pages/P10Demo";
import ListComponentsDemo from "./pages/ListComponentsDemo";
import CardComponentsDemo from "./pages/CardComponentsDemo";

// Demo pages
import ButtonDemo from "./pages/ButtonDemo";
import AtomsDemo from "./pages/AtomsDemo";
import DatePickerDemo from "./pages/DatePickerDemo";
import DarkModeTest from "./pages/DarkModeTest";
import AiComponentsDemo from "./pages/AiComponentsDemo";
import ProgressDemo from "./pages/ProgressDemo";
import MenuDemo from "./pages/MenuDemo";
import CheckboxDemo from "./pages/CheckboxDemo";
import SwitchDemo from "./pages/SwitchDemo";
import TextFieldDemo from "./pages/TextFieldDemo";
import InputFieldDemo from "./pages/InputFieldDemo";
import MessagesDemo from "./pages/MessagesDemo";
import LogsDemo from "./pages/LogsDemo";
import SnackbarDemo from "./pages/SnackbarDemo";
import TabsDemo from "./pages/TabsDemo";
import SearchDemo from "./pages/SearchDemo";
import AppBarsDemo from "./pages/AppBarsDemo";
import ToastDemo from "./pages/ToastDemo";
import LoaderDemo from "./pages/LoaderDemo";
import NavRailDemo from "./pages/NavRailDemo";
import GraphCourbeDemo from "./pages/GraphCourbeDemo";
import FoundationComponentsDemo from "./pages/FoundationComponentsDemo";
import StepperDemo from "./pages/StepperDemo";
import InlineMessageDemo from "./pages/InlineMessageDemo";
import SheetDemo from "./pages/demo/SheetDemo";

// Parcours P06 - Individual routes
import CLI_01_Page_Creation_Client from "./pages/client/routes/CLI_01_Page_Creation_Client";
import CLI_07_Modale_Creation_Rapide from "./pages/client/routes/CLI_07_Modale_Creation_Rapide";

// Parcours P07 - Individual routes
import BIE_01_Page_Creation_Bien from "./pages/property/routes/BIE_01_Page_Creation_Bien";

// Parcours P08 - Individual routes
import FIC_01_Page_Fiche_Client from "./pages/client/routes/FIC_01_Page_Fiche_Client";
import FIC_01_Page_List_Client from "./pages/client/routes/FIC_01_Page_List_Client";
import FIB_01_Page_List_Bien from "./pages/property/routes/FIB_01_Page_List_Bien";

// Parcours P09 - Individual routes
import FIB_01_PageFicheBien from "./pages/FIB_01_PageFicheBien";

// Parcours P10 - Individual routes
import AFF_01_PageFicheAffaire from "./pages/AFF_01_PageFicheAffaire";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "database",
        Component: Database,
      },
      {
        path: "clients",
        Component: Clients,
      },
      {
        path: "properties",
        Component: Properties,
      },
      {
        path: "deals",
        Component: Deals,
      },
      {
        path: "documents",
        Component: Documents,
      },
      {
        path: "calendar",
        Component: Calendar,
      },
      {
        path: "automations",
        Component: Automations,
      },
      {
        path: "button-demo",
        Component: ButtonDemo,
      },
      {
        path: "atoms-demo",
        Component: AtomsDemo,
      },
      {
        path: "date-picker-demo",
        Component: DatePickerDemo,
      },
      {
        path: "dark-mode-test",
        Component: DarkModeTest,
      },
      {
        path: "ai-components-demo",
        Component: AiComponentsDemo,
      },
      {
        path: "progress-demo",
        Component: ProgressDemo,
      },
      {
        path: "menu-demo",
        Component: MenuDemo,
      },
      {
        path: "checkbox-demo",
        Component: CheckboxDemo,
      },
      {
        path: "switch-demo",
        Component: SwitchDemo,
      },
      {
        path: "text-field-demo",
        Component: TextFieldDemo,
      },
      {
        path: "input-field-demo",
        Component: InputFieldDemo,
      },
      {
        path: "messages-demo",
        Component: MessagesDemo,
      },
      {
        path: "logs-demo",
        Component: LogsDemo,
      },
      {
        path: "snackbar-demo",
        Component: SnackbarDemo,
      },
      {
        path: "tabs-demo",
        Component: TabsDemo,
      },
      {
        path: "search-demo",
        Component: SearchDemo,
      },
      {
        path: "app-bars-demo",
        Component: AppBarsDemo,
      },
      {
        path: "toast-demo",
        Component: ToastDemo,
      },
      {
        path: "loader-demo",
        Component: LoaderDemo,
      },
      {
        path: "nav-rail-demo",
        Component: NavRailDemo,
      },
      {
        path: "graph-courbe-demo",
        Component: GraphCourbeDemo,
      },
      {
        path: "foundation-components-demo",
        Component: FoundationComponentsDemo,
      },
      {
        path: "stepper-demo",
        Component: StepperDemo,
      },
      {
        path: "inline-message-demo",
        Component: InlineMessageDemo,
      },
      {
        path: "sheet-demo",
        Component: SheetDemo,
      },
      {
        path: "list-components-demo",
        Component: ListComponentsDemo,
      },
      {
        path: "card-components-demo",
        Component: CardComponentsDemo,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: RegisterStep1,
      },
      {
        path: "register-step1",
        Component: RegisterStep1,
      },
      {
        path: "register-step2",
        Component: RegisterStep2,
      },
      {
        path: "register-step3",
        Component: RegisterStep3,
      },
      {
        path: "register-step4",
        Component: RegisterStep4,
      },
      {
        path: "onboarding-wizard",
        Component: OnboardingWizard,
      },
      {
        path: "p01-demo",
        Component: P01Demo,
      },
      {
        path: "p02-demo",
        Component: P02Demo,
      },
      {
        path: "p03-demo",
        Component: P03Demo,
      },
      {
        path: "p04-demo",
        Component: P04Demo,
      },
      {
        path: "p05-demo",
        Component: P05Demo,
      },
      {
        path: "p06-demo",
        Component: P06Demo,
      },
      {
        path: "p07-demo",
        Component: P07Demo,
      },
      {
        path: "p08-demo",
        Component: P08Demo,
      },
      {
        path: "p09-demo",
        Component: P09Demo,
      },
      {
        path: "p10-demo",
        Component: P10Demo,
      },
      // Sign Up Parcours (SUP)
      {
        path: "signup/landing",
        Component: SUP_00_LandingPage,
      },
      {
        path: "signup/method",
        Component: SUP_01_MethodChoice,
      },
      {
        path: "signup/email-password",
        Component: SUP_02_EmailPasswordForm,
      },
      {
        path: "signup/verify-email",
        Component: SUP_03_VerifyEmail,
      },
      {
        path: "signup/persona-routing",
        Component: SUP_04_PersonaRouting,
      },
      {
        path: "signup/profile-solo",
        Component: SUP_05A_ProfileSolo,
      },
      {
        path: "signup/profile-agency",
        Component: SUP_05B_ProfileAgency,
      },
      {
        path: "signup/team-invitation",
        Component: SUP_06_TeamInvitation,
      },
      {
        path: "signup/confirmation",
        Component: SUP_07_Confirmation,
      },
      // Legacy SUP routes (old format)
      {
        path: "SUP_00_LandingPage",
        Component: SUP_00_LandingPage,
      },
      {
        path: "SUP_01_MethodChoice",
        Component: SUP_01_MethodChoice,
      },
      {
        path: "SUP_02_EmailPasswordForm",
        Component: SUP_02_EmailPasswordForm,
      },
      {
        path: "SUP_03_VerifyEmail",
        Component: SUP_03_VerifyEmail,
      },
      {
        path: "SUP_04_PersonaRouting",
        Component: SUP_04_PersonaRouting,
      },
      {
        path: "SUP_05A_ProfileSolo",
        Component: SUP_05A_ProfileSolo,
      },
      {
        path: "SUP_05B_ProfileAgency",
        Component: SUP_05B_ProfileAgency,
      },
      {
        path: "SUP_06_TeamInvitation",
        Component: SUP_06_TeamInvitation,
      },
      {
        path: "SUP_07_Confirmation",
        Component: SUP_07_Confirmation,
      },
      // Sign In Parcours (SIN)
      {
        path: "signin",
        Component: SIN_01_SignIn,
      },
      {
        path: "signin/forgot-password",
        Component: SIN_02_ForgotPasswordEmail,
      },
      {
        path: "signin/forgot-password-confirmation",
        Component: SIN_03_ForgotPasswordConfirmation,
      },
      {
        path: "signin/new-password",
        Component: SIN_04_NewPassword,
      },
      {
        path: "signin/password-reset-confirmation",
        Component: SIN_05_PasswordResetConfirmation,
      },
      // Legacy SIN routes (old format)
      {
        path: "SIN_01_SignIn",
        Component: SIN_01_SignIn,
      },
      {
        path: "SIN_02_ForgotPasswordEmail",
        Component: SIN_02_ForgotPasswordEmail,
      },
      {
        path: "SIN_03_ForgotPasswordConfirmation",
        Component: SIN_03_ForgotPasswordConfirmation,
      },
      {
        path: "SIN_04_NewPassword",
        Component: SIN_04_NewPassword,
      },
      {
        path: "SIN_05_PasswordResetConfirmation",
        Component: SIN_05_PasswordResetConfirmation,
      },
      {
        path: "SIN_06_LinkExpired",
        Component: SIN_06_LinkExpired,
      },
      {
        path: "SIN_07_AccountLocked",
        Component: SIN_07_AccountLocked,
      },
      {
        path: "SIN_08_InvitationSignup",
        Component: SIN_08_InvitationSignup,
      },
      // Onboarding Parcours (OBT)
      {
        path: "onboarding/welcome",
        Component: OBT_00_WelcomeModal,
      },
      {
        path: "onboarding/spotlight-dashboard",
        Component: OBT_01_SpotlightDashboard,
      },
      {
        path: "onboarding/spotlight-navigation",
        Component: OBT_02_SpotlightNavigation,
      },
      {
        path: "onboarding/spotlight-ia",
        Component: OBT_03_SpotlightIA,
      },
      {
        path: "onboarding/spotlight-import",
        Component: OBT_04_SpotlightImport,
      },
      {
        path: "onboarding/spotlight-help",
        Component: OBT_05_SpotlightHelp,
      },
      {
        path: "onboarding/transition",
        Component: OBT_06_TransitionModal,
      },
      // Legacy OBT routes
      {
        path: "OBT_00_WelcomeModal",
        Component: OBT_00_WelcomeModal,
      },
      {
        path: "OBT_01_SpotlightDashboard",
        Component: OBT_01_SpotlightDashboard,
      },
      {
        path: "OBT_02_SpotlightNavigation",
        Component: OBT_02_SpotlightNavigation,
      },
      {
        path: "OBT_03_SpotlightIA",
        Component: OBT_03_SpotlightIA,
      },
      {
        path: "OBT_04_SpotlightImport",
        Component: OBT_04_SpotlightImport,
      },
      {
        path: "OBT_05_SpotlightHelp",
        Component: OBT_05_SpotlightHelp,
      },
      {
        path: "OBT_06_TransitionModal",
        Component: OBT_06_TransitionModal,
      },
      // Setup Parcours (OBS)
      {
        path: "setup/stepper",
        Component: OBS_00_StepperSetup,
      },
      {
        path: "setup/profil-professionnel",
        Component: OBS_01_ProfilProfessionnel,
      },
      {
        path: "setup/organisation",
        Component: OBS_02_Organisation,
      },
      {
        path: "setup/documents",
        Component: OBS_03_Documents,
      },
      {
        path: "setup/parametres",
        Component: OBS_04_Parametres,
      },
      {
        path: "setup/confirmation",
        Component: OBS_05_Confirmation,
      },
      // Legacy OBS routes
      {
        path: "OBS_00_StepperSetup",
        Component: OBS_00_StepperSetup,
      },
      {
        path: "OBS_01_ProfilProfessionnel",
        Component: OBS_01_ProfilProfessionnel,
      },
      {
        path: "OBS_02_Organisation",
        Component: OBS_02_Organisation,
      },
      {
        path: "OBS_03_Documents",
        Component: OBS_03_Documents,
      },
      {
        path: "OBS_04_Parametres",
        Component: OBS_04_Parametres,
      },
      {
        path: "OBS_05_Confirmation",
        Component: OBS_05_Confirmation,
      },
      // Import Parcours (IMP)
      {
        path: "import/choix-type",
        Component: IMP_01_ChoixTypeImport,
      },
      {
        path: "import/upload-fichier",
        Component: IMP_02_UploadFichier,
      },
      {
        path: "import/mapping-colonnes",
        Component: IMP_03_MappingColonnes,
      },
      {
        path: "import/previsualisation",
        Component: IMP_04_Previsualisation,
      },
      {
        path: "import/en-cours",
        Component: IMP_05_ImportEnCours,
      },
      {
        path: "import/resultat",
        Component: IMP_06_Resultat,
      },
      {
        path: "import/erreur-parsing",
        Component: IMP_07_ErreurParsing,
      },
      // Legacy IMP routes
      {
        path: "IMP_01_ChoixTypeImport",
        Component: IMP_01_ChoixTypeImport,
      },
      {
        path: "IMP_02_UploadFichier",
        Component: IMP_02_UploadFichier,
      },
      {
        path: "IMP_03_MappingColonnes",
        Component: IMP_03_MappingColonnes,
      },
      {
        path: "IMP_04_Previsualisation",
        Component: IMP_04_Previsualisation,
      },
      {
        path: "IMP_05_ImportEnCours",
        Component: IMP_05_ImportEnCours,
      },
      {
        path: "IMP_06_Resultat",
        Component: IMP_06_Resultat,
      },
      {
        path: "IMP_07_ErreurParsing",
        Component: IMP_07_ErreurParsing,
      },
      // Parcours P06 - Individual routes
      {
        path: "client/creation",
        Component: CLI_01_Page_Creation_Client,
      },
      {
        path: "client/creation-rapide",
        Component: CLI_07_Modale_Creation_Rapide,
      },
      // Legacy routes with underscore nomenclature
      {
        path: "CLI_01_Page_Creation_Client",
        Component: CLI_01_Page_Creation_Client,
      },
      {
        path: "CLI_07_Modale_Creation_Rapide",
        Component: CLI_07_Modale_Creation_Rapide,
      },
      // Parcours P07 - Individual routes
      {
        path: "property/creation",
        Component: BIE_01_Page_Creation_Bien,
      },
      // Legacy routes with underscore nomenclature
      {
        path: "BIE_01_Page_Creation_Bien",
        Component: BIE_01_Page_Creation_Bien,
      },
      // Parcours P08 - Individual routes
      {
        path: "client/fiche",
        Component: FIC_01_Page_Fiche_Client,
      },
      {
        path: "client/list",
        Component: FIC_01_Page_List_Client,
      },
      {
        path: "property/list",
        Component: FIB_01_Page_List_Bien,
      },
      // Legacy routes with underscore nomenclature
      {
        path: "FIC_01_Page_Fiche_Client",
        Component: FIC_01_Page_Fiche_Client,
      },
      {
        path: "FIC_01_Page_List_Client",
        Component: FIC_01_Page_List_Client,
      },
      {
        path: "FIB_01_Page_List_Bien",
        Component: FIB_01_Page_List_Bien,
      },
      // Parcours P09 - Individual routes
      {
        path: "property/fiche",
        Component: FIB_01_PageFicheBien,
      },
      // Legacy routes with underscore nomenclature
      {
        path: "FIB_01_PageFicheBien",
        Component: FIB_01_PageFicheBien,
      },
      // Parcours P10 - Individual routes
      {
        path: "deal/fiche",
        Component: AFF_01_PageFicheAffaire,
      },
      // Legacy routes with underscore nomenclature
      {
        path: "AFF_01_PageFicheAffaire",
        Component: AFF_01_PageFicheAffaire,
      },
    ],
  },
]);