# Testing Guide - FoodExplorer

This document provides a comprehensive testing checklist for all features of the FoodExplorer application.

## 🧪 Testing Checklist

### ✅ Initial Load
- [ ] Application loads without errors
- [ ] Navbar displays correctly with logo and branding
- [ ] Search bar is visible with "Search by Name" mode selected
- [ ] Product grid shows skeleton loading states
- [ ] Products load and display in a grid layout
- [ ] Each product card shows:
  - Product image (or placeholder)
  - Product name
  - Brand name
  - Category
  - Ingredients preview
  - Nutrition grade badge (if available)
  - "View Details" button

### 🔍 Search by Name
**Test Case 1: Valid Search**
- [ ] Switch to "Search by Name" mode (should be default)
- [ ] Type "chocolate" in the search bar
- [ ] Click Search button
- [ ] Products related to chocolate display
- [ ] Previous products are cleared

**Test Case 2: Clear Search**
- [ ] After searching, click the clear button (X icon)
- [ ] Search input is cleared
- [ ] Original product list is restored

**Test Case 3: Empty Search**
- [ ] Clear the search box
- [ ] Click Search
- [ ] Original product list is shown

**Test Case 4: No Results**
- [ ] Search for "zzzzinvalidproduct999"
- [ ] "No Products Found" message displays
- [ ] Helpful text suggests adjusting filters

### 📱 Barcode Search
**Test Case 1: Valid Barcode**
- [ ] Switch to "Search by Barcode" mode
- [ ] Input field changes to number type
- [ ] Placeholder shows barcode hint
- [ ] Enter barcode: `737628064502`
- [ ] Click Search
- [ ] Single product displays
- [ ] Load More button is hidden

**Test Case 2: Invalid Barcode**
- [ ] Enter invalid barcode: `999999999`
- [ ] Click Search
- [ ] Error message displays
- [ ] "Product not found" message shown

**Test Case 3: Mode Switching**
- [ ] Switch from Name to Barcode mode
- [ ] Input field type changes
- [ ] Icon changes to barcode icon
- [ ] Switch back to Name mode
- [ ] Input resets to text type

### 🏷️ Category Filtering
**Test Case 1: Select Category**
- [ ] Open Category dropdown
- [ ] Categories load (may take a moment)
- [ ] Select "Beverages" (or another popular category)
- [ ] Products filter to show only beverages
- [ ] Category counter shows product count

**Test Case 2: Clear Category**
- [ ] With a category selected, click "Reset Filters"
- [ ] Filter clears
- [ ] All products display again

**Test Case 3: Category + Sort**
- [ ] Select a category
- [ ] Apply a sort option
- [ ] Both filters work together
- [ ] Reset clears both filters

### 📊 Sorting
**Test Case 1: Name A-Z**
- [ ] Select "Name (A-Z)" from Sort dropdown
- [ ] Products rearrange alphabetically
- [ ] First product name starts with A or early letter

**Test Case 2: Name Z-A**
- [ ] Select "Name (Z-A)"
- [ ] Products reverse order
- [ ] First product name starts with Z or late letter

**Test Case 3: Grade Best First**
- [ ] Select "Grade (Best First)"
- [ ] Products with grade A appear first
- [ ] Products without grades appear at end

**Test Case 4: Grade Worst First**
- [ ] Select "Grade (Worst First)"
- [ ] Products with grade E appear first
- [ ] Order is reversed

**Test Case 5: Reset Sort**
- [ ] Click "Reset Filters"
- [ ] Sorting returns to default
- [ ] Products show in original order

### 📄 Pagination / Load More
**Test Case 1: Load More**
- [ ] Scroll to bottom of product grid
- [ ] "Load More Products" button visible
- [ ] Click button
- [ ] Spinner shows while loading
- [ ] New products append to grid
- [ ] Page doesn't jump or scroll unexpectedly

**Test Case 2: Multiple Loads**
- [ ] Click "Load More" multiple times
- [ ] Products continue appending
- [ ] Each load adds ~24 products
- [ ] No duplicate products appear

**Test Case 3: End of Results**
- [ ] Continue loading until no more products
- [ ] "You've reached the end!" message displays
- [ ] Load More button disappears
- [ ] Checkmark icon shows

### 🔍 Product Detail Modal
**Test Case 1: Open Modal**
- [ ] Click on any product card
- [ ] Modal opens with smooth animation
- [ ] Background darkens with blur effect
- [ ] Scroll is prevented on body

**Test Case 2: Modal Content**
- [ ] Product image displays (or placeholder)
- [ ] Nutrition badge shows correct grade and color
- [ ] Product name and brand display
- [ ] All sections are present:
  - Ingredients
  - Nutritional Values (8 nutrients)
  - Labels & Certifications (if available)
  - Allergens (if available)
  - Additional Information (if available)

**Test Case 3: Close Modal**
- [ ] Click X button - modal closes
- [ ] Click outside modal - modal closes
- [ ] Body scroll is restored

**Test Case 4: Nutritional Values**
- [ ] All 8 nutrient values display
- [ ] "N/A" shows for missing values
- [ ] Values have correct units (g, kcal)
- [ ] Hover effects work on nutrient items

**Test Case 5: Labels & Allergens**
- [ ] Labels display as green tags
- [ ] Allergens display as red tags
- [ ] Tags are properly formatted (capitalized)
- [ ] Hover effects work on tags

### 📱 Responsive Design
**Desktop (> 1024px)**
- [ ] Product grid shows 4-5 columns
- [ ] All navigation elements visible
- [ ] Search bar is wide
- [ ] Modal uses two-column layout

**Tablet (768px - 1024px)**
- [ ] Product grid shows 3 columns
- [ ] Filter controls stack appropriately
- [ ] Modal uses single column

**Mobile (< 768px)**
- [ ] Product grid shows 2 columns
- [ ] Navigation links hide (except theme icon)
- [ ] Search bar button text hides, shows icon only
- [ ] Filter dropdowns stack vertically
- [ ] Modal is full-screen
- [ ] Close button remains accessible

**Small Mobile (< 480px)**
- [ ] Product grid shows 1 column
- [ ] Mode toggle buttons show icon only
- [ ] All elements remain usable
- [ ] Text remains readable

### 🎨 UI/UX
**Visual Design**
- [ ] Dark theme is consistent throughout
- [ ] Glassmorphism effects are visible
- [ ] Gradient text appears on headings
- [ ] Color palette is vibrant and modern
- [ ] Nutrition grade colors are correct (A=green, E=red)

**Animations & Transitions**
- [ ] Product cards have hover lift effect
- [ ] Buttons have hover state changes
- [ ] Modal opens with scale animation
- [ ] Loading spinner rotates smoothly
- [ ] Page transitions are smooth (no jank)

**Interactions**
- [ ] All buttons are clickable
- [ ] Hover states provide feedback
- [ ] Focus states are visible (keyboard navigation)
- [ ] Form inputs are responsive
- [ ] Dropdowns open and close correctly

### ⚠️ Error Handling
**Test Case 1: Network Error**
- [ ] Disconnect internet
- [ ] Try to search or load products
- [ ] Error banner displays with helpful message
- [ ] App doesn't crash

**Test Case 2: API Timeout**
- [ ] If API is slow/down, error shows
- [ ] Message suggests waiting and retrying
- [ ] App remains functional

**Test Case 3: Missing Data**
- [ ] Products without images show placeholder
- [ ] Products without grades hide badge
- [ ] Missing ingredients show default message
- [ ] "N/A" displays for missing nutrients

### ♿ Accessibility
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Images have alt text
- [ ] Buttons have aria-labels
- [ ] Color contrast meets WCAG standards
- [ ] Screen reader announces changes (test with screen reader)

### 🔄 State Management
**Test Case 1: State Persistence**
- [ ] Apply filters
- [ ] Load more products
- [ ] Open product detail
- [ ] Close detail - filters remain applied
- [ ] State is consistent

**Test Case 2: Reset State**
- [ ] Apply multiple filters
- [ ] Search for products
- [ ] Click "Reset Filters"
- [ ] All filters clear
- [ ] Products return to default

### 🚀 Performance
- [ ] Initial load time < 3 seconds
- [ ] Product images lazy load
- [ ] Smooth scrolling with many products
- [ ] Modal opens without lag
- [ ] No console errors or warnings
- [ ] No memory leaks (check DevTools)

## 🐛 Known Issues / Limitations

Document any issues found during testing:

1. **API Server Downtime**
   - Issue: OpenFoodFacts server may be unavailable
   - Expected: Error message displays
   - Workaround: Wait and retry

2. **Missing Product Data**
   - Issue: Some products have incomplete data
   - Expected: Fallbacks display (N/A, placeholders)
   - Working: As designed

3. **Image Loading**
   - Issue: Some product images may fail to load
   - Expected: Placeholder shows
   - Working: Error handling in place

## ✅ Test Results Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Initial Load | ⬜ | |
| Search by Name | ⬜ | |
| Search by Barcode | ⬜ | |
| Category Filter | ⬜ | |
| Sort Functionality | ⬜ | |
| Load More | ⬜ | |
| Product Detail | ⬜ | |
| Responsive Design | ⬜ | |
| Error Handling | ⬜ | |
| Accessibility | ⬜ | |

**Legend:**
- ⬜ Not Tested
- ✅ Passed
- ❌ Failed
- ⚠️ Partial / Issues Found

## 📝 Testing Notes

Use this space to document any additional observations or issues:

---

**Tested By**: _______________
**Date**: _______________
**Browser**: _______________
**Version**: _______________
