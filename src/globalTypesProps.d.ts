declare namespace Prop {
   export interface ButtonWithArrowProps {
      text: string;
   }
   export interface ISharedProps {
      whatsapp: string;
      classname: string;
      text: string;
   }
   export interface INavigationProps {
      id: string;
   }
   export namespace Teachers {
      export type TeacherType = {
         // refactor on backend
         id: number;
         image: string;
         name: string;
         expertise: string;
         instagram: string;
         description: string;
      };

      export interface ModalProps {
         teacher: Slice.ITeacherData;
         closeModal: () => void;
      }
   }
   export namespace Header {
      interface TSetIsMenuOpen {
         setIsMenuOpen: (isOpen: boolean) => void;
      }
      export interface HeaderComponentProps {
         bandPage: boolean;
      }
      export interface TopButtonProps {
         isMenuOpen: boolean;
         toggleMenu: () => void;
      }
      export interface NavListProps extends TSetIsMenuOpen {
         lyrics?: string;
      }
   }
   export namespace Collage {
      type Item = {
         alt: string;
         src: string;
         view: string;
      };
      export interface Props {
         items: (Item | undefined)[];
      }
      export interface ILightBoxProp {
         index: number;
         open: boolean;
         setOpen: (arg: boolean) => void;
         setIndex: (arg: number) => void;
         nextPage: () => void;
      }
   }
   export namespace Footer {
      export type TFooterCourses = string[];

      export interface FooterComponent {
         backendData: {
            coursesList: TFooterCourses;
            contactDetails: Slice.IGetContacts;
         };
         bandPage: boolean;
      }
   }
   export interface SocialLinks {
      setIsMenuOpen: (isOpen: boolean) => void;
   }
   export interface SectionWrapper extends React.HTMLAttributes<HTMLDivElement> {
      header?: string;
      children: React.ReactNode;
      forwardedRef?: React.ForwardedRef<HTMLElement>;
   }

   export interface ModalYouTube {
      id: string;
      youTubeId: string | null;
      allIDS: (string | null)[];
   }
   export interface Logo extends React.HTMLAttributes<HTMLAnchorElement> {
      bandPage?: boolean;
      footerHide?: string;
      onFooter?: boolean;
   }
   export namespace Hero {
      type Text = {
         header: string;
         paragraph?: string;
      };

      interface Props extends React.HTMLAttributes<HTMLDivElement> {
         video: string | undefined;
         text?: Text;
         children: React.ReactNode;
      }

      export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
         header: string;
         paragraph?: string;
      }
   }
   export interface ContactUsTemplate {
      heading: string;
      secondHeading?: string;
      paragraph: string[];
      button: React.ReactNode;
   }
}
