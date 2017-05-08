import React  from 'react';
import $      from 'jquery';
import jQuery from 'jquery';

class ViewHtml extends React.Component {
    constructor() {
        super();
        this.tabDefined = this.tabDefined.bind(this);
        this.addCodeCount = this.addCodeCount.bind(this);
    };

    tabDefined() {
        var Tab = function (element) {
            // jscs:disable requireDollarBeforejQueryAssignment
            this.element = $(element)
            // jscs:enable requireDollarBeforejQueryAssignment
        }

        Tab.VERSION = '3.3.7'

        Tab.TRANSITION_DURATION = 150

        Tab.prototype.show = function () {
            var $this    = this.element
            var $ul      = $this.closest('ul:not(.dropdown-menu)')
            var selector = $this.data('target')

            if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
            }

            if ($this.parent('li').hasClass('active')) return

            var $previous = $ul.find('.active:last a')
            var hideEvent = $.Event('hide.bs.tab', {
            relatedTarget: $this[0]
            })
            var showEvent = $.Event('show.bs.tab', {
            relatedTarget: $previous[0]
            })

            $previous.trigger(hideEvent)
            $this.trigger(showEvent)

            if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

            var $target = $(selector)

            this.activate($this.closest('li'), $ul)
            this.activate($target, $target.parent(), function () {
            $previous.trigger({
                type: 'hidden.bs.tab',
                relatedTarget: $this[0]
            })
            $this.trigger({
                type: 'shown.bs.tab',
                relatedTarget: $previous[0]
            })
            })
        }

        Tab.prototype.activate = function (element, container, callback) {
            var $active    = container.find('> .active')
            var transition = callback
            && $.support.transition
            && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

            function next() {
            $active
                .removeClass('active')
                .find('> .dropdown-menu > .active')
                .removeClass('active')
                .end()
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', false)

            element
                .addClass('active')
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', true)

            if (transition) {
                element[0].offsetWidth // reflow for transition
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }

            if (element.parent('.dropdown-menu').length) {
                element
                .closest('li.dropdown')
                    .addClass('active')
                .end()
                .find('[data-toggle="tab"]')
                    .attr('aria-expanded', true)
            }

            callback && callback()
            }

            $active.length && transition ?
            $active
                .one('bsTransitionEnd', next)
                .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
            next()

            $active.removeClass('in')
        }


        // TAB PLUGIN DEFINITION
        // =====================

        function Plugin(option) {
            return this.each(function () {
            var $this = $(this)
            var data  = $this.data('bs.tab')

            if (!data) $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string') data[option]()
            })
        }

        var old = $.fn.tab

        $.fn.tab             = Plugin
        $.fn.tab.Constructor = Tab


        // TAB NO CONFLICT
        // ===============

        $.fn.tab.noConflict = function () {
            $.fn.tab = old
            return this
        }


        // TAB DATA-API
        // ============

        var clickHandler = function (e) {
            e.preventDefault()
            Plugin.call($(this), 'show')
        }

        $(document)
            .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
            .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
    };

    addCodeCount() {
        $('.code-container').each(function() {
            var count = 1;

            $(this).find('pre').each(function() {
                if ($(this).hasClass('indent-4') && count > 100) { 
                    $(this).addClass('indent-lg'); 
                }
                else if ($(this).hasClass('indent-5') && count > 9 && count < 100) { 
                    $(this).addClass('indent-sm'); 
                }
                else if ($(this).hasClass('indent-5') && count < 9) { 
                    $(this).addClass('indent-xs'); 
                }
                else if ($(this).hasClass('indent-6') && count > 9 && count < 100) { 
                    $(this).addClass('indent-sm'); 
                }
                else if ($(this).hasClass('indent-6') && count < 9) { 
                    $(this).addClass('indent-xs'); 
                }

                $(this).attr('data-line', count++);
            });
        });
    };

    componentWillMount() {
        this.tabDefined();
    };

    componentDidMount() {
        $('#viewToggleContainer a').on('click', function (e) {
            e.preventDefault()
            $(this).tab('show')
        });
    };

    componentDidUpdate() {
        const contentList  = this.props.contentList;
        const contentCount = contentList.length;
        const contentText  = contentList.join('');
        
        var $textContent = $('#textContent'),
            $htmlContent = $('#htmlContent');
        
        /* render text content */
        $textContent.empty().append(contentText);
        /* render html content */
        $htmlContent.empty();
        for (let i = 0; i < contentCount; i ++) {
            var tmpDiv = $('<div></div>');

            tmpDiv.text(contentList[i]);
            $htmlContent.append(tmpDiv);
        }

        this.addCodeCount();
    };

    render() {
        return (
            <div className = "new-paper-view-container">
                <div 
                    id        = "viewToggleContainer" 
                    className = "col-xs-3 view-toggle-container"
                >
                    <ul className = "nav nav-pills nav-stacked">
                        <li 
                            role      = "presentation" 
                            className = "active"
                        >
                            <a href = "#textPaperContent">view text</a>
                        </li>
                        <li role = "presentation">
                            <a href = "#htmlPaperContent">view html</a>
                        </li>
                    </ul>
                </div>
                <div className = "col-xs-9 tab-content">
                    <div 
                        id        = "textPaperContent"
                        role      = "tabpanel" 
                        className = "tab-pane active view-content"
                    >
                        <div className = "page-header">
                            <h1>TEXT文本</h1>
                        </div>
                        <div 
                            id        = "textContent"
                            className = "paper-content"
                        ></div>
                    </div>
                    <div 
                        id        = "htmlPaperContent"
                        role      = "tabpanel" 
                        className = "tab-pane view-content"
                    >
                        <div className = "page-header">
                            <h1>HTML文本</h1>
                        </div>
                        <div id = "htmlContent"></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ViewHtml;