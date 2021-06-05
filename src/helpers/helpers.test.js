import { cn } from "./helpers";

describe('cn - should return string of class names', () => {
    it('null', () => {
        const classNamesList = cn(null)
        expect(classNamesList).toEqual("");
    });
    it('undefined and className', () => {
        const classNamesList = cn(undefined, "bm_links_container")
        expect(classNamesList).toEqual("bm_links_container");
    });
    it('if 2 good', () => {
        const classNamesList = cn("bm_links_container", "bm_icon_container")
        expect(classNamesList).toEqual("bm_links_container bm_icon_container");
    });
    it('nothing passes', () => {
        const classNamesList = cn()
        expect(classNamesList).toEqual("");
    });
  }); 